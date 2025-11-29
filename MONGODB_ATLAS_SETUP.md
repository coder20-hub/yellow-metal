# 🔗 MongoDB Atlas Connection String Setup

## 📍 Where to Add Your MongoDB Atlas Connection String

Once you get your MongoDB Atlas connection string, add it in **3 places**:

---

## 1️⃣ Netlify Environment Variables (PRODUCTION - MOST IMPORTANT)

This is where your deployed website will use the database.

### Steps:
1. Go to: https://app.netlify.com
2. Select your site
3. Click **"Site settings"** (top menu)
4. Click **"Environment variables"** (left sidebar)
5. Click **"Add a variable"**

### Add these variables:

#### Variable 1:
```
Key: MONGODB_URI
Value: [Paste your full Atlas connection string here]
Scope: All scopes (or Production)
```

#### Variable 2:
```
Key: MONGODB_DB_NAME
Value: yellowmetal
Scope: All scopes
```

#### Variable 3:
```
Key: DATABASE_URL
Value: [Same as MONGODB_URI]
Scope: All scopes
```

#### Variable 4:
```
Key: JWT_SECRET
Value: [Generate a random 32+ character string]
Scope: All scopes
```

#### Variable 5:
```
Key: NODE_ENV
Value: production
Scope: All scopes
```

6. After adding all variables, go to **"Deploys"** tab
7. Click **"Trigger deploy"** → **"Clear cache and deploy site"**

---

## 2️⃣ Migration Script (For Importing Data)

For importing your local collections to Atlas.

### Steps:
1. Open file: `frontend/scripts/migrate-to-atlas.js`
2. Find this line (around line 18):
   ```javascript
   const ATLAS_URI = 'REPLACE_WITH_YOUR_ATLAS_CONNECTION_STRING';
   ```
3. Replace with your connection string:
   ```javascript
   const ATLAS_URI = 'mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/yellowmetal?retryWrites=true&w=majority';
   ```
4. Also check `LOCAL_DB_NAME` matches your local database name
5. Save the file

---

## 3️⃣ Local Development (.env.local file)

For testing locally before deploying.

### Steps:
1. Create file: `frontend/.env.local` (if it doesn't exist)
2. Add these lines:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/yellowmetal?retryWrites=true&w=majority
   MONGODB_DB_NAME=yellowmetal
   DATABASE_URL=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/yellowmetal?retryWrites=true&w=majority
   JWT_SECRET=your-local-development-secret-key
   NODE_ENV=development
   ```
3. Replace with your actual connection string
4. Save the file
5. Restart your development server

---

## 🔐 Connection String Format

Your MongoDB Atlas connection string should look like this:

```
mongodb+srv://[username]:[password]@[cluster-name].xxxxx.mongodb.net/[database-name]?retryWrites=true&w=majority
```

### Example:
```
mongodb+srv://yellowmetal_admin:MyPass123!@cluster0.abcd1234.mongodb.net/yellowmetal?retryWrites=true&w=majority
```

### Breakdown:
- `mongodb+srv://` - Protocol
- `yellowmetal_admin` - Your database username
- `MyPass123!` - Your database password
- `cluster0.abcd1234.mongodb.net` - Your cluster address
- `yellowmetal` - Your database name
- `?retryWrites=true&w=majority` - Connection options (keep these)

---

## ⚠️ Important: Password Encoding

If your password contains special characters, you need to URL-encode them:

| Character | Encoded |
|-----------|---------|
| `@` | `%40` |
| `#` | `%23` |
| `$` | `%24` |
| `%` | `%25` |
| `&` | `%26` |
| `+` | `%2B` |
| `=` | `%3D` |
| `?` | `%3F` |
| `/` | `%2F` |
| ` ` (space) | `%20` |

### Example:
If your password is: `MyPass@123!`
Encoded password: `MyPass%40123!`

So connection string becomes:
```
mongodb+srv://username:MyPass%40123!@cluster0.xxxxx.mongodb.net/yellowmetal
```

---

## ✅ Checklist

After adding connection string:

- [ ] Added to Netlify environment variables
- [ ] Updated migration script
- [ ] Created/updated `.env.local` for local testing
- [ ] Password is URL-encoded (if needed)
- [ ] Redeployed Netlify site after adding variables
- [ ] Tested connection locally

---

## 🧪 Test Connection

### Test in MongoDB Compass:
1. Open MongoDB Compass
2. Click "New Connection"
3. Paste your Atlas connection string
4. Click "Connect"
5. If it connects, you're good! ✅

### Test in Application:
1. Start local dev server: `npm run dev`
2. Try accessing `/crm` page
3. Try logging in
4. If it works, connection is correct! ✅

---

## 🆘 Troubleshooting

### Error: "Authentication failed"
- Check username and password are correct
- Verify password is URL-encoded if it has special characters
- Check database user exists in MongoDB Atlas

### Error: "Cannot connect to server"
- Verify network access in Atlas allows your IP (or 0.0.0.0/0)
- Check connection string format
- Wait a few minutes after adding network access

### Error: "Database not found"
- Database is created automatically on first write
- Make sure database name is in connection string
- Check database name matches what's in your code

---

## 📞 When to Update

Update connection string if you:
- Change database user password
- Create a new cluster
- Change database name
- Need to connect to different environment

---

**Remember: Always keep your connection string secure and never commit it to GitHub!**

