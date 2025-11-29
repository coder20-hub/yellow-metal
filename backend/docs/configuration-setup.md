# Configuration Setup Guide

This guide explains how to configure your application for different environments and set up API integration.

## Configuration Overview

The application uses a centralized configuration system that can be set up in multiple ways:

1. **Default Configuration**: Built-in defaults for development
2. **Runtime Configuration**: Set via JavaScript at runtime
3. **Build-time Configuration**: Set during the build process
4. **User Preferences**: Stored in localStorage

## Setting Up API Configuration

### Method 1: Runtime Configuration (Recommended)

Add this to your `index.html` file before loading your React app:

```html
<script>
  window.__APP_CONFIG__ = {
    api: {
      baseUrl: 'https://your-api-domain.com',
      key: 'your-production-api-key',
      timeout: 15000
    },
    features: {
      enableCache: true,
      cacheDuration: 300000,
      enableAnalytics: true,
      enableErrorTracking: true
    }
  };
</script>
```

### Method 2: Update Configuration in Code

```typescript
import { appConfig } from './config/app.config';

// Update configuration when your app starts
appConfig.updateConfig({
  api: {
    baseUrl: 'https://your-api-domain.com',
    key: 'your-production-api-key',
    timeout: 15000,
    retryAttempts: 3
  },
  features: {
    enableCache: true,
    cacheDuration: 300000,
    enableAnalytics: true,
    enableErrorTracking: true
  }
});
```

### Method 3: Environment-specific Setup

Create different configuration files for different environments:

```typescript
// config/production.config.ts
export const productionConfig = {
  api: {
    baseUrl: 'https://api.yourdomain.com',
    key: 'prod-api-key',
    timeout: 15000,
    retryAttempts: 3
  },
  features: {
    enableCache: true,
    cacheDuration: 600000, // 10 minutes for production
    enableAnalytics: true,
    enableErrorTracking: true
  }
};

// config/development.config.ts
export const developmentConfig = {
  api: {
    baseUrl: 'http://localhost:3001',
    key: 'dev-api-key',
    timeout: 10000,
    retryAttempts: 1
  },
  features: {
    enableCache: false,
    cacheDuration: 60000, // 1 minute for development
    enableAnalytics: false,
    enableErrorTracking: false
  }
};
```

Then in your main App.tsx:

```typescript
import { appConfig } from './config/app.config';
import { productionConfig } from './config/production.config';
import { developmentConfig } from './config/development.config';

// Set configuration based on environment
if (process.env.NODE_ENV === 'production') {
  appConfig.updateConfig(productionConfig);
} else {
  appConfig.updateConfig(developmentConfig);
}
```

## API Integration Steps

### 1. Set Up Your Backend API

Ensure your backend API implements the following endpoints:

```
GET    /api/v1/loan-plans              - Get filtered loan plans
GET    /api/v1/loan-plans/:id          - Get specific loan plan
POST   /api/v1/loan-plans              - Create loan plan (admin)
PUT    /api/v1/loan-plans/:id          - Update loan plan (admin)
DELETE /api/v1/loan-plans/:id          - Delete loan plan (admin)
```

### 2. Update API Configuration

Replace the default values with your actual API details:

```typescript
import { loanPlansService } from './services/loanPlansService';

// Update the service configuration
loanPlansService.updateConfig(
  'https://your-api-domain.com',
  'your-actual-api-key'
);
```

### 3. Test the Integration

The application will automatically fall back to mock data if the API is not available. This ensures your application continues to work during development and handles API failures gracefully.

## Configuration Options

### API Configuration

```typescript
interface ApiConfig {
  baseUrl: string;      // Your API base URL
  key: string;          // API authentication key
  timeout: number;      // Request timeout in milliseconds
  retryAttempts: number; // Number of retry attempts for failed requests
}
```

### Features Configuration

```typescript
interface FeaturesConfig {
  enableCache: boolean;        // Enable response caching
  cacheDuration: number;       // Cache duration in milliseconds
  enableAnalytics: boolean;    // Enable usage analytics
  enableErrorTracking: boolean; // Enable error tracking
}
```

### UI Configuration

```typescript
interface UIConfig {
  theme: 'light' | 'dark' | 'auto';  // Default theme
  language: 'en' | 'hi';             // Default language
  currency: 'INR';                   // Currency format
}
```

### Loan Configuration

```typescript
interface LoanConfig {
  defaultLTV: number;        // Default Loan-to-Value ratio (0.75 = 75%)
  defaultInterestRate: number; // Default interest rate
  maxLoanAmount: number;     // Maximum loan amount
  minLoanAmount: number;     // Minimum loan amount
}
```

## Environment Variables (Alternative Method)

If you're using a bundler that supports environment variables, you can create a `.env` file:

```env
# .env
REACT_APP_API_BASE_URL=https://api.yourdomain.com
REACT_APP_API_KEY=your-api-key-here
REACT_APP_ENABLE_CACHE=true
REACT_APP_CACHE_DURATION=300000
```

Then access them in your configuration:

```typescript
const config = {
  api: {
    baseUrl: process.env.REACT_APP_API_BASE_URL || 'https://api.yourdomain.com',
    key: process.env.REACT_APP_API_KEY || 'default-key'
  }
};
```

**Note**: The current implementation avoids `process.env` to prevent browser compatibility issues. Use the runtime configuration method instead.

## Deployment Configuration

### Vercel

Create a `vercel.json` file:

```json
{
  "functions": {
    "pages/api/**/*.ts": {
      "runtime": "@vercel/node"
    }
  },
  "env": {
    "NEXT_PUBLIC_API_BASE_URL": "https://api.yourdomain.com",
    "NEXT_PUBLIC_API_KEY": "@api-key"
  }
}
```

### Netlify

Create a `netlify.toml` file:

```toml
[build]
  publish = "dist"
  command = "npm run build"

[build.environment]
  REACT_APP_API_BASE_URL = "https://api.yourdomain.com"
  REACT_APP_API_KEY = "your-api-key"
```

### Traditional Hosting

For traditional hosting, set the configuration in your HTML file:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Gold Loan App</title>
</head>
<body>
  <div id="root"></div>
  
  <script>
    // Set configuration before loading the app
    window.__APP_CONFIG__ = {
      api: {
        baseUrl: 'https://api.yourdomain.com',
        key: 'your-api-key'
      }
    };
  </script>
  
  <script src="/static/js/bundle.js"></script>
</body>
</html>
```

## Monitoring and Debugging

### Enable Logging

```typescript
appConfig.updateConfig({
  features: {
    enableErrorTracking: true
  }
});
```

### Check Current Configuration

```typescript
import { appConfig } from './config/app.config';

// Log current configuration
console.log('Current config:', appConfig.getConfig());

// Check API configuration
console.log('API Base URL:', appConfig.api.baseUrl);
console.log('Cache enabled:', appConfig.features.enableCache);
```

### Test API Connection

```typescript
import { loanPlansService } from './services/loanPlansService';

// Test API connection
loanPlansService.getLoanPlans({ loanAmount: 100000 })
  .then(response => {
    console.log('API working:', response.message);
    console.log('Plans found:', response.total);
  })
  .catch(error => {
    console.error('API error:', error);
  });
```

## Production Checklist

- [ ] Set production API base URL
- [ ] Configure production API key
- [ ] Enable caching for better performance
- [ ] Set appropriate cache duration
- [ ] Enable error tracking
- [ ] Configure CORS on your API server
- [ ] Set up SSL certificates
- [ ] Test all API endpoints
- [ ] Verify fallback to mock data works
- [ ] Test in different browsers
- [ ] Check mobile responsiveness

## Security Notes

1. **API Keys**: Never expose sensitive API keys in client-side code
2. **HTTPS**: Always use HTTPS in production
3. **CORS**: Configure CORS properly on your API server
4. **Rate Limiting**: Implement rate limiting on your API
5. **Authentication**: Use proper authentication for admin operations

The configuration system is designed to be flexible and secure, providing fallbacks for development while supporting production deployments.