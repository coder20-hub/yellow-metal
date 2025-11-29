# 🚀 Netlify Deployment Guide - Complete Setup

This guide will help you deploy your Yellow Metal Gold Loan website to Netlify with MongoDB Atlas.

---

## 📋 Prerequisites Checklist

- [ ] MongoDB Atlas account created
- [ ] MongoDB Atlas cluster created (M0 Free tier)
- [ ] Database user created in Atlas
- [ ] Network access configured (0.0.0.0/0 for testing)
- [ ] MongoDB Atlas connection string ready
- [ ] GitHub account
- [ ] Code pushed to GitHub repository

---

## 🔧 Step 1: Prepare Your Code

### 1.1 Push Code to GitHub

If you haven't already, push your code to GitHub:

```bash
# In your project root (C:\Users\koust\Downloads\code)
git init
git add .
git commit -m "Initial commit - Ready for Netlify deployment"
git branch -M main

# Add your GitHub repository (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 1.2 Verify Configuration Files

✅ **Already Created:**
- `frontend/netlify.toml` - Netlify configuration
- `frontend/next.config.mjs` - Updated for Netlify
- `frontend/scripts/migrate-to-atlas.js` - Migration script

---

## 🌐 Step 2: Create & Configure Netlify Account

### 2.1 Sign Up for Netlify

1. Go to: https://app.netlify.com/signup
2. Choose one:
   - **Option A:** Sign up with GitHub (Recommended)
     - Click "Sign up with GitHub"
     - Authorize Netlify
   - **Option B:** Sign up with Email
     - Enter email and password
     - Verify email

### 2.2 Connect GitHub Repository

1. In Netlify dashboard, click **"Add new site"** → **"Import an existing project"**
2. Click **"GitHub"**
3. If first time, authorize Netlify:
   - Click "Authorize Netlify"
   - Choose repositories access (or all repositories)
   - Click "Install"
4. Select your repository: `YOUR_REPO_NAME`
5. Click **"Next"**

### 2.3 Configure Build Settings

Netlify should auto-detect settings from `netlify.toml`, but verify:

- **Base directory:** `frontend`
- **Build command:** `npm run build` (or leave blank, uses netlify.toml)
- **Publish directory:** `.next` (or leave blank, uses netlify.toml)

Click **"Deploy site"** (we'll add environment variables after first deploy)

---

## ⏳ Step 3: Wait for Initial Deployment

1. Netlify will start building your site
2. Wait 2-5 minutes for build to complete
3. You'll see build logs in real-time
4. Once successful, you'll get a URL like: `https://random-name-123456.netlify.app`

---

## 🔐 Step 4: Add MongoDB Atlas Connection String

### 4.1 Get Your MongoDB Atlas Connection String

Once your MongoDB Atlas cluster is ready:

1. Go to MongoDB Atlas Dashboard
2. Click **"Connect"** on your cluster
3. Choose **"Drivers"**
4. Copy the connection string (looks like):
   ```
   mongodb+srv://username:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. **Replace `<password>`** with your actual database user password
6. **Add database name** at the end:
   ```
   mongodb+srv://username:actualpassword@cluster0.xxxxx.mongodb.net/yellowmetal?retryWrites=true&w=majority
   ```

### 4.2 Add Environment Variables in Netlify

1. Go to your site in Netlify dashboard
2. Click **"Site settings"** (top menu)
3. Click **"Environment variables"** (left sidebar)
4. Click **"Add a variable"**

Add these variables one by one:

#### Variable 1: MongoDB URI
```
Key: MONGODB_URI
Value: mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/yellowmetal?retryWrites=true&w=majority
Scope: All scopes (or Production, Deploy previews, Branch deploys)
```

#### Variable 2: Database Name
```
Key: MONGODB_DB_NAME
Value: yellowmetal
Scope: All scopes
```

#### Variable 3: Alternative Database URL
```
Key: DATABASE_URL
Value: mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/yellowmetal?retryWrites=true&w=majority
Scope: All scopes
```

#### Variable 4: JWT Secret
```
Key: JWT_SECRET
Value: your-super-secret-jwt-key-minimum-32-characters-long-random-string-change-this
Scope: All scopes
```

#### Variable 5: Node Environment
```
Key: NODE_ENV
Value: production
Scope: All scopes
```

**Important:** 
- If your password has special characters, URL-encode them:
  - `@` → `%40`
  - `#` → `%23`
  - `$` → `%24`
  - `%` → `%25`
  - `&` → `%26`
  - `+` → `%2B`
  - `=` → `%3D`
  - `?` → `%3F`
  - `/` → `%2F`

5. After adding all variables, go to **"Deploys"** tab
6. Click **"Trigger deploy"** → **"Clear cache and deploy site"**
7. Wait for new deployment to complete

---

## 📦 Step 5: Import Local Collections to MongoDB Atlas

### 5.1 Update Migration Script

1. Open: `frontend/scripts/migrate-to-atlas.js`
2. Update these values:
   ```javascript
   const LOCAL_DB_NAME = 'yellowmetal'; // or 'crm_db' - check your local database name
   const ATLAS_URI = 'mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/yellowmetal?retryWrites=true&w=majority';
   ```
   Replace `ATLAS_URI` with your actual MongoDB Atlas connection string.

### 5.2 Run Migration Script

```bash
# Navigate to frontend folder
cd frontend

# Run migration script
node scripts/migrate-to-atlas.js
```

The script will:
- ✅ Connect to your local MongoDB
- ✅ Check all collections
- ✅ Export data from local
- ✅ Import to MongoDB Atlas
- ✅ Show progress and summary

### 5.3 Alternative: Manual Migration via MongoDB Compass

If you prefer using GUI:

#### Export from Local:
1. Open MongoDB Compass
2. Connect to: `mongodb://localhost:27017`
3. Select your database
4. For each collection:
   - Click on collection
   - Click "..." menu → "Export Collection"
   - Save as JSON

#### Import to Atlas:
1. In Compass, click "New Connection"
2. Paste your Atlas connection string
3. Connect
4. For each JSON file:
   - Click "ADD DATA" → "Import File"
   - Select JSON file
   - Choose collection name
   - Click "Import"

---

## ✅ Step 6: Verify Deployment

### 6.1 Test Your Website

Visit your Netlify URL and test:

1. **Main Page:** `https://your-site.netlify.app/`
   - Should load correctly
   - Images should display

2. **Loan Page:** `https://your-site.netlify.app/loan`
   - Calculator should work
   - Form should be visible

3. **CRM Login:** `https://your-site.netlify.app/crm`
   - Login page should load
   - Try logging in with your credentials

4. **Vision Page:** `https://your-site.netlify.app/vision`

5. **Privacy Page:** `https://your-site.netlify.app/privacy`

### 6.2 Test Database Connection

1. Login to CRM
2. Submit a test loan application
3. Check if data appears in CRM dashboard
4. View applications list

### 6.3 Check Logs

1. Go to Netlify dashboard → Your site → **"Functions"** tab
2. Click on any function
3. View logs for any errors

---

## 🔧 Step 7: Customize Site Name (Optional)

1. Go to **Site settings** → **General** → **Site details**
2. Click **"Change site name"**
3. Enter your preferred name (e.g., `yellowmetal-gold-loan`)
4. Your new URL: `https://yellowmetal-gold-loan.netlify.app`

---

## 🔒 Step 8: Configure Custom Domain (Optional)

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `yellowmetal.co`)
4. Follow DNS instructions:
   - Add CNAME record: `www` → `your-site.netlify.app`
   - Or add A records as shown
5. Netlify will auto-provision SSL certificate

---

## 🐛 Troubleshooting

### Issue: Build Fails

**Check:**
- Build logs in Netlify
- Ensure all dependencies in `package.json`
- Verify Node version (should be 18+)

**Solution:**
```bash
# Locally test build
cd frontend
npm install
npm run build
```

### Issue: Database Connection Fails

**Check:**
1. Environment variables are set correctly
2. MongoDB Atlas network access allows all IPs (0.0.0.0/0)
3. Connection string format is correct
4. Password is URL-encoded if it has special characters

**Solution:**
- Double-check connection string format
- Test connection string in MongoDB Compass first
- Check Atlas network access settings

### Issue: 404 Errors on Pages

**Check:**
- `netlify.toml` exists and has redirects
- Next.js routing is correct

**Solution:**
- Verify `netlify.toml` is in `frontend/` folder
- Redeploy after fixing

### Issue: Environment Variables Not Working

**Check:**
- Variables are added in Netlify
- Variable names match exactly (case-sensitive)
- Redeployed after adding variables

**Solution:**
- Clear cache and redeploy
- Verify variable names match code

---

## 📊 Quick Reference

### Environment Variables Needed:

```
MONGODB_URI = mongodb+srv://username:password@cluster/database
MONGODB_DB_NAME = yellowmetal
DATABASE_URL = mongodb+srv://username:password@cluster/database
JWT_SECRET = your-secret-key-32-chars-minimum
NODE_ENV = production
```

### Collections to Migrate:

- `crm_users` - Admin accounts
- `loan_applications` - Loan applications
- `pincodes` - Pincode data
- `crm_settings` - Settings
- `loan_plans` - Loan plans
- `visitors` - Visitor tracking (if exists)

### Netlify Build Settings:

- Base directory: `frontend`
- Build command: `npm run build`
- Publish directory: `.next`

---

## 🎉 Success Checklist

After completing all steps, verify:

- [ ] Site is live on Netlify
- [ ] All pages load correctly
- [ ] MongoDB Atlas connected
- [ ] Collections migrated successfully
- [ ] CRM login works
- [ ] Loan application form works
- [ ] Data saves to database
- [ ] No errors in function logs

---

## 📞 Next Steps After Deployment

1. **Monitor:**
   - Check Netlify analytics
   - Monitor function logs
   - Check MongoDB Atlas metrics

2. **Optimize:**
   - Set up CDN caching
   - Enable image optimization
   - Configure redirects if needed

3. **Secure:**
   - Use strong JWT secret
   - Limit MongoDB network access
   - Enable MongoDB Atlas backups

---

## 💡 Important Notes

- **First Deployment:** Takes 5-10 minutes
- **Subsequent Deploys:** Faster (2-5 minutes)
- **Auto-Deploy:** Enabled automatically when connected to GitHub
- **Branch Deploys:** Each branch can have its own deploy preview
- **Environment Variables:** Apply to all deploys by default (unless scoped)

---

## 🆘 Need Help?

If you encounter issues:

1. Check Netlify build logs
2. Check MongoDB Atlas connection
3. Verify environment variables
4. Test locally first
5. Check this guide's troubleshooting section

---

**Your website should now be live on Netlify with MongoDB Atlas! 🚀**

