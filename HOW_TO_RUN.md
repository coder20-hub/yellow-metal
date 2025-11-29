# 🚀 How to Run Everything

## 📁 Project Structure (Clean!)

```
code/
├── frontend/      ← Main application (REQUIRED)
└── backend/       ← Future backend (NOT REQUIRED)
```

---

## ✅ Running Frontend (Recommended)

The frontend has everything you need. **This is all you need to run!**

```bash
# Step 1: Go to frontend folder
cd C:\Users\koust\Downloads\code\frontend

# Step 2: Start the server
npm run dev
```

**Access both pages:**
- Main page: http://localhost:3000
- Loan page: http://localhost:3000/loan

✨ **Done! Both pages work from ONE server on port 3000**

---

## 🔧 Running Backend (Optional - Future)

The backend is currently **not needed** because the frontend uses mock data.

**If you want to run it in the future:**

```bash
# Terminal 1: Frontend
cd C:\Users\koust\Downloads\code\frontend
npm run dev

# Terminal 2: Backend (in a separate terminal)
cd C:\Users\koust\Downloads\code\backend
npm run dev
```

---

## 📊 Summary

| Component | Required? | Port | Pages |
|-----------|-----------|------|-------|
| Frontend | ✅ YES | 3000 | Main (/) & Loan (/loan) |
| Backend | ❌ NO | - | Not needed yet |

---

## 🎯 Quick Commands

### Start Everything You Need:
```bash
cd frontend && npm run dev
```

### Stop Server:
Press `Ctrl+C` in terminal

### Restart Server:
```bash
Ctrl+C
npm run dev
```

---

## 🌐 URLs

After running `npm run dev` in frontend folder:

- ✅ http://localhost:3000 - Main page
- ✅ http://localhost:3000/loan - Loan page

Both pages are served from the **same server** on **port 3000**!

