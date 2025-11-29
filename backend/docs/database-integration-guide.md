# Database Integration Guide

This guide explains how to replace the mock loan plans database with a real database backend.

## Database Schema

### 1. Loan Plans Table

```sql
-- PostgreSQL Schema
CREATE TABLE loan_plans (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    interest_rate DECIMAL(5,2) NOT NULL CHECK (interest_rate > 0),
    max_tenure INTEGER NOT NULL CHECK (max_tenure > 0),
    min_amount BIGINT NOT NULL CHECK (min_amount > 0),
    max_amount BIGINT NOT NULL CHECK (max_amount >= min_amount),
    processing_fee DECIMAL(5,2) NOT NULL DEFAULT 0,
    features JSONB NOT NULL DEFAULT '[]'::jsonb,
    special_offer TEXT,
    is_popular BOOLEAN NOT NULL DEFAULT false,
    category VARCHAR(20) NOT NULL CHECK (category IN ('basic', 'premium', 'elite')),
    status VARCHAR(20) NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Indexes for performance
    INDEX idx_loan_plans_amount_range (min_amount, max_amount),
    INDEX idx_loan_plans_category (category),
    INDEX idx_loan_plans_status (status),
    INDEX idx_loan_plans_interest_rate (interest_rate)
);

-- Trigger to automatically update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_loan_plans_updated_at 
    BEFORE UPDATE ON loan_plans 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

### 2. Sample Data

```sql
-- Insert sample loan plans
INSERT INTO loan_plans (name, interest_rate, max_tenure, min_amount, max_amount, processing_fee, features, special_offer, is_popular, category) VALUES
-- Basic Plans
('Quick Cash Plan', 12.0, 12, 10000, 100000, 0.5, 
 '["Quick approval in 30 minutes", "Minimal documentation", "Flexible repayment", "No hidden charges"]'::jsonb,
 NULL, false, 'basic'),

('Standard Gold Loan', 10.5, 18, 25000, 150000, 0.75,
 '["Competitive interest rate", "Up to 18 months tenure", "Online account management", "Part payment facility"]'::jsonb,
 NULL, false, 'basic'),

-- Premium Plans  
('Premium Gold Plus', 9.5, 24, 50000, 500000, 0,
 '["Zero processing fee", "Priority customer service", "Extended tenure options", "Gold price protection", "Free gold valuation"]'::jsonb,
 'First 3 months at 8.5% interest', true, 'premium'),

('Business Growth Loan', 9.0, 36, 100000, 750000, 0,
 '["Lowest interest rate", "Extended 3-year tenure", "Business-focused features", "Bulk payment discounts", "Dedicated relationship manager"]'::jsonb,
 'Additional 0.5% discount for businesses', false, 'premium'),

-- Elite Plans
('Elite Gold Reserve', 8.5, 60, 200000, 2000000, 0,
 '["Ultra-low interest rate", "Up to 5 years tenure", "Concierge banking services", "Investment advisory", "Insurance coverage", "Gold buyback guarantee"]'::jsonb,
 'Complimentary gold storage for 1 year', true, 'elite'),

('Platinum Wealth Loan', 8.0, 84, 500000, 5000000, 0,
 '["Best-in-class interest rate", "Up to 7 years tenure", "White-glove service", "Wealth management services", "Tax advisory support", "Premium lounge access"]'::jsonb,
 'Personal financial advisor included', false, 'elite');
```

## Backend API Implementation

### 1. Node.js/Express Example

```javascript
// routes/loanPlans.js
const express = require('express');
const router = express.Router();
const { Pool } = require('pg');

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// GET /api/v1/loan-plans - Get filtered loan plans
router.get('/', async (req, res) => {
  try {
    const {
      loanAmount,
      category,
      minInterestRate,
      maxInterestRate,
      minTenure,
      maxTenure,
      activeOnly = 'true'
    } = req.query;

    let query = 'SELECT * FROM loan_plans WHERE 1=1';
    const values = [];
    let paramCount = 1;

    // Filter by loan amount range
    if (loanAmount) {
      const amount = parseInt(loanAmount);
      query += ` AND min_amount <= $${paramCount} AND max_amount >= $${paramCount}`;
      values.push(amount);
      paramCount++;
    }

    // Filter by category
    if (category) {
      query += ` AND category = $${paramCount}`;
      values.push(category);
      paramCount++;
    }

    // Filter by interest rate range
    if (minInterestRate) {
      query += ` AND interest_rate >= $${paramCount}`;
      values.push(parseFloat(minInterestRate));
      paramCount++;
    }

    if (maxInterestRate) {
      query += ` AND interest_rate <= $${paramCount}`;
      values.push(parseFloat(maxInterestRate));
      paramCount++;
    }

    // Filter by tenure range
    if (minTenure) {
      query += ` AND max_tenure >= $${paramCount}`;
      values.push(parseInt(minTenure));
      paramCount++;
    }

    if (maxTenure) {
      query += ` AND max_tenure <= $${paramCount}`;
      values.push(parseInt(maxTenure));
      paramCount++;
    }

    // Filter by active status
    if (activeOnly === 'true') {
      query += ` AND status = 'active'`;
    }

    // Order by interest rate
    query += ' ORDER BY interest_rate ASC, is_popular DESC';

    const result = await pool.query(query, values);
    
    res.json({
      plans: result.rows,
      total: result.rows.length,
      message: result.rows.length === 0 ? 'No plans found for the specified criteria' : undefined
    });
  } catch (error) {
    console.error('Error fetching loan plans:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: 'Failed to fetch loan plans'
    });
  }
});

// GET /api/v1/loan-plans/:id - Get specific loan plan
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const result = await pool.query(
      'SELECT * FROM loan_plans WHERE id = $1 AND status = $2',
      [id, 'active']
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: 'Not found',
        message: 'Loan plan not found'
      });
    }

    res.json({
      plan: result.rows[0]
    });
  } catch (error) {
    console.error('Error fetching loan plan:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: 'Failed to fetch loan plan'
    });
  }
});

// POST /api/v1/loan-plans - Create new loan plan (admin only)
router.post('/', authenticateAdmin, async (req, res) => {
  try {
    const {
      name,
      interestRate,
      maxTenure,
      minAmount,
      maxAmount,
      processingFee,
      features,
      specialOffer,
      isPopular,
      category
    } = req.body;

    // Validation
    if (!name || !interestRate || !maxTenure || !minAmount || !maxAmount || !category) {
      return res.status(400).json({
        error: 'Validation error',
        message: 'Missing required fields'
      });
    }

    const result = await pool.query(
      `INSERT INTO loan_plans 
       (name, interest_rate, max_tenure, min_amount, max_amount, processing_fee, features, special_offer, is_popular, category)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
       RETURNING *`,
      [name, interestRate, maxTenure, minAmount, maxAmount, processingFee || 0, JSON.stringify(features || []), specialOffer, isPopular || false, category]
    );

    res.status(201).json({
      plan: result.rows[0]
    });
  } catch (error) {
    console.error('Error creating loan plan:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: 'Failed to create loan plan'
    });
  }
});

module.exports = router;
```

### 2. Authentication Middleware

```javascript
// middleware/auth.js
const jwt = require('jsonwebtoken');

function authenticateAdmin(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      error: 'Unauthorized',
      message: 'Access token required'
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({
        error: 'Forbidden',
        message: 'Invalid or expired token'
      });
    }

    if (user.role !== 'admin') {
      return res.status(403).json({
        error: 'Forbidden',
        message: 'Admin access required'
      });
    }

    req.user = user;
    next();
  });
}

module.exports = { authenticateAdmin };
```

## Environment Configuration

### 1. Frontend Environment Variables

Create a `.env` file in your React app:

```env
# API Configuration
REACT_APP_API_BASE_URL=https://api.yourdomain.com
REACT_APP_API_KEY=your_api_key_here

# Feature Flags
REACT_APP_ENABLE_CACHE=true
REACT_APP_CACHE_DURATION=300000

# Development
REACT_APP_ENVIRONMENT=production
```

### 2. Backend Environment Variables

```env
# Database
DATABASE_URL=postgresql://username:password@localhost:5432/goldloan_db

# JWT Secret
JWT_SECRET=your_super_secret_jwt_key

# API Keys
API_KEY=your_api_key_here

# CORS
ALLOWED_ORIGINS=http://localhost:3000,https://yourdomain.com

# Cache
REDIS_URL=redis://localhost:6379
```

## Deployment Considerations

### 1. Database Hosting Options

- **PostgreSQL**: AWS RDS, Google Cloud SQL, DigitalOcean Managed Databases
- **MongoDB**: MongoDB Atlas, AWS DocumentDB
- **Supabase**: Managed PostgreSQL with real-time features

### 2. API Hosting Options

- **Vercel**: Serverless functions with automatic deployments
- **Netlify**: Serverless functions with form handling
- **AWS Lambda**: Serverless with API Gateway
- **Railway**: Full-stack deployment platform
- **DigitalOcean App Platform**: Container-based deployment

### 3. CDN and Caching

```javascript
// Add Redis caching for better performance
const redis = require('redis');
const client = redis.createClient(process.env.REDIS_URL);

// Cache middleware
const cacheMiddleware = (duration = 300) => {
  return async (req, res, next) => {
    const key = `loan_plans:${JSON.stringify(req.query)}`;
    
    try {
      const cached = await client.get(key);
      if (cached) {
        return res.json(JSON.parse(cached));
      }
      
      res.sendResponse = res.json;
      res.json = (body) => {
        client.setex(key, duration, JSON.stringify(body));
        res.sendResponse(body);
      };
      
      next();
    } catch (error) {
      next();
    }
  };
};
```

## Monitoring and Analytics

### 1. Error Tracking

```javascript
// Add error tracking with Sentry
const Sentry = require('@sentry/node');

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV
});

// Use in error handling
app.use(Sentry.Handlers.errorHandler());
```

### 2. Performance Monitoring

```javascript
// Add performance monitoring
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');

app.use(helmet());
app.use(compression());
app.use(morgan('combined'));
```

## Testing

### 1. API Testing

```javascript
// tests/loanPlans.test.js
const request = require('supertest');
const app = require('../app');

describe('Loan Plans API', () => {
  test('GET /api/v1/loan-plans should return filtered plans', async () => {
    const response = await request(app)
      .get('/api/v1/loan-plans?loanAmount=100000')
      .expect(200);

    expect(response.body.plans).toBeDefined();
    expect(Array.isArray(response.body.plans)).toBeTruthy();
  });
});
```

### 2. Database Migrations

```javascript
// migrations/001_create_loan_plans.js
exports.up = function(knex) {
  return knex.schema.createTable('loan_plans', function(table) {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.string('name').notNullable();
    table.decimal('interest_rate', 5, 2).notNullable();
    table.integer('max_tenure').notNullable();
    table.bigInteger('min_amount').notNullable();
    table.bigInteger('max_amount').notNullable();
    table.decimal('processing_fee', 5, 2).defaultTo(0);
    table.json('features').defaultTo('[]');
    table.text('special_offer');
    table.boolean('is_popular').defaultTo(false);
    table.enu('category', ['basic', 'premium', 'elite']).notNullable();
    table.enu('status', ['active', 'inactive']).defaultTo('active');
    table.timestamps(true, true);
    
    table.index(['min_amount', 'max_amount']);
    table.index('category');
    table.index('status');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('loan_plans');
};
```

## Next Steps

1. **Set up your database** using the provided schema
2. **Create your backend API** using the example code
3. **Update environment variables** with your actual API endpoints
4. **Test the integration** with real data
5. **Deploy to production** with proper monitoring

The system is designed to gracefully fall back to mock data if the API is unavailable, ensuring your application remains functional during development and handles errors gracefully in production.