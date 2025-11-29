# CRM System - Complete Setup

## ✅ What's Been Created

### API Routes (`frontend/app/api/crm/`)

1. **Authentication**
   - `/api/crm/auth/login` - Login endpoint
   - `/api/crm/auth/me` - Get current user info

2. **Admin Management** (Superadmin only)
   - `/api/crm/admins` - CRUD operations for admin users
   - GET - List all admins
   - POST - Create new admin
   - PUT - Update admin
   - DELETE - Delete admin

3. **Loan Applications**
   - `/api/crm/applications` - List and create applications
   - `/api/crm/applications/export` - Export to CSV

4. **Initialization**
   - `/api/crm/init` - Create superadmin (one-time)

### Frontend Pages (`frontend/app/crm/`)

1. **Login Page** (`/crm`)
   - Secure login with username/password
   - Redirects to dashboard after login

2. **Dashboard** (`/crm/dashboard`)
   - Overview page
   - Navigation to Applications and Admin Management
   - Role-based menu (superadmin sees "Manage Credentials")

3. **Applications** (`/crm/applications`)
   - View all loan applications
   - Search functionality
   - Export to CSV button

4. **Admin Management** (`/crm/admins`) - Superadmin only
   - List all admin users
   - Create new admin
   - Edit existing admin
   - Delete admin
   - Cannot delete own account

## 🔧 Setup Instructions

### 1. Install Dependencies

```bash
cd frontend
npm install bcryptjs jsonwebtoken mongodb --save --legacy-peer-deps
npm install --save-dev @types/jsonwebtoken --legacy-peer-deps
```

Note: `@types/bcryptjs` is not needed as bcryptjs includes its own types.

### 2. Environment Variables

Create `.env.local` in the `frontend` directory:

```env
MONGODB_URI=mongodb://localhost:27017
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/

MONGODB_DB_NAME=yellowmetal

JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRES_IN=24h
```

### 3. Initialize Superadmin

**Option A: Using API**
```bash
curl -X POST http://localhost:3000/api/crm/init \
  -H "Content-Type: application/json" \
  -d '{"username": "superadmin", "password": "your-password"}'
```

**Option B: Using Script**
```bash
cd frontend
node scripts/init-superadmin.js superadmin your-password
```

### 4. Start the Server

```bash
cd frontend
npm run dev
```

### 5. Access CRM

Navigate to: `http://localhost:3000/crm`

Login with your superadmin credentials.

## 🔐 User Roles

### Superadmin
- ✅ Full access to all features
- ✅ Can manage admin users (create/edit/delete)
- ✅ Can view and export loan applications
- ✅ Access to "Manage Credentials" page

### Admin
- ✅ Can view loan applications
- ✅ Can export loan applications to CSV
- ❌ Cannot access "Manage Credentials" page
- ❌ Cannot create/edit/delete admin users

## 📋 Features

### Loan Application Form
The loan application form at `/loan` now automatically submits to the CRM database when users fill it out.

### CSV Export
All loan applications can be exported to CSV with one click from the Applications page.

### Admin Management
- Create new admin users with roles (admin/superadmin)
- Edit admin details (username, name, role, password)
- Delete admin users (except your own account)
- View creation date and last login

## 🗄️ Database Collections

### `crm_users`
```javascript
{
  _id: ObjectId,
  username: String,
  password: String (bcrypt hashed),
  name: String,
  role: "admin" | "superadmin",
  createdAt: Date,
  lastLogin: Date (optional),
  createdBy: String
}
```

### `loan_applications`
```javascript
{
  _id: ObjectId,
  name: String,
  phone: String,
  loanAmount: Number,
  branch: String,
  referenceNumber: String,
  createdAt: Date,
  status: String
}
```

## 🛡️ Security Features

- ✅ Password hashing with bcrypt
- ✅ JWT token authentication
- ✅ Role-based access control
- ✅ Token expiration
- ✅ Protected API routes
- ✅ Cannot delete own admin account

## 📝 Notes

1. **First-time Setup**: You must create a superadmin account before you can login.

2. **JWT Secret**: Change `JWT_SECRET` in production to a strong random string.

3. **MongoDB Connection**: Ensure MongoDB is running and accessible at the `MONGODB_URI`.

4. **Environment Variables**: All sensitive data should be in `.env.local` (not committed to git).

5. **Production**: Use HTTPS in production and secure your MongoDB connection string.

## 🐛 Troubleshooting

**"Cannot connect to MongoDB"**
- Check your `MONGODB_URI` in `.env.local`
- Ensure MongoDB is running (if local)
- Verify network connectivity (if cloud)

**"Unauthorized" errors**
- Token may be expired - try logging out and back in
- Check if JWT_SECRET is consistent

**"Superadmin already exists"**
- The init endpoint can only be used once
- Use the admin management page to create more admins

## 📚 Next Steps

1. Set up MongoDB (local or cloud)
2. Configure environment variables
3. Initialize superadmin
4. Start the development server
5. Login and test the CRM system
6. Create additional admin users as needed

For detailed setup instructions, see `CRM_SETUP.md`.

