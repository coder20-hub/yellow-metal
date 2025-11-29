# CRM System Setup Guide

## Overview
The CRM system allows you to manage loan applications and admin users. It includes:
- Login page with role-based access
- Dashboard for navigation
- Loan Applications management with CSV export
- Admin user management (superadmin only)

## Prerequisites

1. MongoDB database (local or cloud)
2. Node.js and npm installed
3. Environment variables configured

## Environment Variables

Create a `.env.local` file in the `frontend` directory with:

```env
# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/
MONGODB_DB_NAME=yellowmetal

# JWT Secret (change this in production!)
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRES_IN=24h
```

## Installation

1. Install required npm packages:
```bash
cd frontend
npm install bcryptjs jsonwebtoken mongodb
npm install --save-dev @types/bcryptjs @types/jsonwebtoken
```

## Initialize Superadmin

### Option 1: Using API Endpoint

Make a POST request to `/api/crm/init`:
```bash
curl -X POST http://localhost:3000/api/crm/init \
  -H "Content-Type: application/json" \
  -d '{"username": "superadmin", "password": "your-password"}'
```

### Option 2: Using Node Script

```bash
cd frontend
node scripts/init-superadmin.js superadmin your-password
```

### Option 3: Manual MongoDB Insert

Connect to MongoDB and run:
```javascript
use yellowmetal
db.crm_users.insertOne({
  username: "superadmin",
  password: "<bcrypt-hashed-password>",
  name: "superadmin",
  role: "superadmin",
  createdAt: new Date(),
  createdBy: "system"
})
```

To generate bcrypt hash:
```javascript
const bcrypt = require('bcryptjs');
bcrypt.hash('your-password', 10).then(console.log);
```

## Accessing the CRM

1. Start your Next.js development server:
```bash
cd frontend
npm run dev
```

2. Navigate to: `http://localhost:3000/crm`

3. Login with your superadmin credentials

## User Roles

### Superadmin
- Full access to all features
- Can create/edit/delete admin users
- Can view and export loan applications
- Can manage credentials

### Admin
- Can view loan applications
- Can export loan applications to CSV
- Cannot access "Manage Credentials" page
- Cannot create/edit/delete admin users

## API Endpoints

### Authentication
- `POST /api/crm/auth/login` - Login
- `GET /api/crm/auth/me` - Get current user info

### Admin Management (Superadmin only)
- `GET /api/crm/admins` - List all admins
- `POST /api/crm/admins` - Create new admin
- `PUT /api/crm/admins` - Update admin
- `DELETE /api/crm/admins?id=<id>` - Delete admin

### Loan Applications (Authenticated users)
- `GET /api/crm/applications` - List all applications
- `POST /api/crm/applications` - Create new application
- `GET /api/crm/applications/export` - Export to CSV

### Initialization
- `POST /api/crm/init` - Initialize superadmin (one-time use)

## Database Collections

The CRM uses two MongoDB collections:

1. **crm_users** - Stores admin users
   - Fields: `_id`, `username`, `password` (hashed), `name`, `role`, `createdAt`, `lastLogin`, `createdBy`

2. **loan_applications** - Stores loan application submissions
   - Fields: `_id`, `name`, `phone`, `loanAmount`, `branch`, `referenceNumber`, `createdAt`, `status`

## Security Notes

1. **Change JWT_SECRET** in production to a strong random string
2. **Use HTTPS** in production
3. **Set strong passwords** for admin accounts
4. **Regularly backup** your MongoDB database
5. **Limit superadmin accounts** - only create what you need

## Troubleshooting

### "Cannot connect to MongoDB"
- Check your `MONGODB_URI` in `.env.local`
- Ensure MongoDB is running (if local)
- Check network connectivity (if cloud)

### "Unauthorized" errors
- Check if your token is expired
- Verify JWT_SECRET matches between sessions
- Try logging out and back in

### "Superadmin already exists"
- You can only create one superadmin via the init endpoint
- Use the admin management page to create additional admins after logging in

## Support

For issues or questions, check the API route files in `frontend/app/api/crm/` for implementation details.

