# 🔐 Netlify Environment Variables - Ready to Add

## ⚠️ Important: Password Encoding

Your password `Yellowmetal@123` contains `@` which must be URL-encoded as `%40` in connection strings.

**Encoded password:** `Yellowmetal%40123`

---

## 📋 Environment Variables for Netlify

Go to your Netlify site → **Site settings** → **Environment variables** → **Add a variable**

Add these **5 variables** exactly as shown below:

---

### Variable 1: MONGODB_URI

```
Key: MONGODB_URI
Value: mongodb+srv://yellowmetal:Yellowmetal%40123@cluster0.xxxxx.mongodb.net/yellowmetal?retryWrites=true&w=majority&appName=Cluster0
Scope: All scopes (or Production, Deploy previews, Branch deploys)
```

**Important:** Notice `%40` instead of `@` in the password!

---

### Variable 2: MONGODB_DB_NAME

```
Key: MONGODB_DB_NAME
Value: yellowmetal
Scope: All scopes
```

---

### Variable 3: DATABASE_URL

```
Key: DATABASE_URL
Value: mongodb+srv://yellowmetal:Yellowmetal%40123@cluster0.xxxxx.mongodb.net/yellowmetal?retryWrites=true&w=majority&appName=Cluster0
Scope: All scopes
```

**Note:** Same as MONGODB_URI (your code checks both)

---

### Variable 4: JWT_SECRET

```
Key: JWT_SECRET
Value: yellowmetal-secret-key-for-production-2024-change-this-to-random-string-minimum-32-characters
Scope: All scopes
```

**⚠️ Important:** Replace this with a random 32+ character string for production!
Generate a secure one at: https://randomkeygen.com/ or use:
```
openssl rand -base64 32
```

---

### Variable 5: NODE_ENV

```
Key: NODE_ENV
Value: production
Scope: All scopes
```

---

## ✅ After Adding Variables

1. **Save** each variable after adding
2. Go to **"Deploys"** tab
3. Click **"Trigger deploy"**
4. Select **"Clear cache and deploy site"**
5. Wait for deployment to complete (2-5 minutes)

---

## 🔍 Verify Connection String

**Original password:** `Yellowmetal@123`  
**Encoded in URL:** `Yellowmetal%40123`

**Full connection string breakdown:**
```
mongodb+srv://yellowmetal:Yellowmetal%40123@cluster0.xxxxx.mongodb.net/yellowmetal?retryWrites=true&w=majority&appName=Cluster0
           └─user─┘ └────────password────────┘ └────cluster─────┘ └─database─┘ └─────────options─────────┘
```

---

## 🧪 Test Before Deploying

You can test the connection string in MongoDB Compass:

1. Open MongoDB Compass
2. Click "New Connection"
3. Paste: `mongodb+srv://yellowmetal:Yellowmetal%40123@cluster0.xxxxx.mongodb.net/yellowmetal?retryWrites=true&w=majority&appName=Cluster0`
4. Click "Connect"
5. If it connects successfully, the connection string is correct! ✅

---

## ⚠️ Important Notes

1. **Password Encoding:** The `@` in your password MUST be `%40` in the connection string
2. **Replace xxxxx:** Make sure `cluster0.xxxxx.mongodb.net` is your actual cluster address
3. **JWT Secret:** Use a strong, random string (minimum 32 characters)
4. **Never Commit:** Never commit `.env.local` or connection strings to GitHub

---

## 🔄 If Connection Fails

1. **Check password encoding:** Ensure `@` is `%40`
2. **Verify cluster address:** Check the actual cluster address in MongoDB Atlas
3. **Network access:** Ensure Atlas network access allows `0.0.0.0/0` or your IP
4. **Database user:** Verify username `yellowmetal` exists in Atlas Database Access

---

## ✅ Quick Copy-Paste

Here's the formatted connection string ready to copy:

```
mongodb+srv://yellowmetal:Yellowmetal%40123@cluster0.xxxxx.mongodb.net/yellowmetal?retryWrites=true&w=majority&appName=Cluster0
```

**Remember:** Replace `xxxxx` with your actual cluster address!

