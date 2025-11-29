# Yellow Metal - Gold Loan Application

## 📁 Project Structure

```
code/
├── frontend/          # Next.js Frontend Application
│   ├── app/          # Next.js App Router
│   │   ├── page.tsx           # Main page (/)
│   │   └── loan/              # Loan page (/loan)
│   │       ├── page.tsx       # Loan page component
│   │       ├── components/    # Loan-specific components
│   │       ├── lib/          # API services and utilities
│   │       └── config/       # Configuration files
│   ├── components/   # Shared components
│   ├── public/       # Static assets
│   └── package.json  # Frontend dependencies
│
└── backend/          # Backend Services (Optional)
    ├── services/     # Backend service implementations
    ├── api/         # API routes
    └── package.json # Backend dependencies
```

## 🚀 Running the Application

### Frontend (Recommended)

The frontend is **self-contained** and includes both pages. Run only this:

```bash
# Navigate to frontend
cd frontend

# Install dependencies (first time only)
npm install

# Start development server
npm run dev
```

**Access the application:**
- Main page: http://localhost:3000
- Loan page: http://localhost:3000/loan

### Backend (Optional)

The backend is currently **not required** as the frontend uses mock data. If you want to set up the backend in the future:

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Start backend server
npm run dev
```

## 📄 Available Pages

### 1. Main Page (`/`)
- Hero section with Yellow Metal branding
- Partners showcase
- No hidden charges section
- Trusted by section
- Mobile app section
- Footer

### 2. Loan Page (`/loan`)
- Loan application form
- Gold loan calculator
- Loan plans display
- Multi-language support (English, Kannada, Telugu)
- Trust indicators
- How it works section
- Testimonials
- Contact section

## 🛠️ Technology Stack

### Frontend
- **Framework:** Next.js 16.0.3 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI + Custom components
- **Icons:** Lucide React

### Backend (Optional)
- **Runtime:** Node.js
- **Language:** TypeScript
- **Services:** Loan plans, Authentication, Database integration

## 📝 Notes

- **Single Server:** Frontend runs on port 3000 and serves both pages
- **No Backend Required:** Frontend uses mock data for development
- **Clean Structure:** Only 2 main folders (`frontend` and `backend`)
- **Easy to Run:** Just `cd frontend && npm run dev`

## 🔧 Development

### Frontend Development
```bash
cd frontend
npm run dev        # Start dev server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run linter
```

### Adding New Pages
1. Create new folder in `frontend/app/your-page/`
2. Add `page.tsx` file
3. Access at `http://localhost:3000/your-page`

## 🐛 Troubleshooting

**If you see errors:**

1. Make sure you're in the frontend folder:
   ```bash
   cd C:\Users\koust\Downloads\code\frontend
   ```

2. Stop any running servers:
   - Press `Ctrl+C` in terminal

3. Clear cache and restart:
   ```bash
   Remove-Item -Path node_modules\.cache -Recurse -Force -ErrorAction SilentlyContinue
   npm run dev
   ```

4. Check if port 3000 is available:
   ```bash
   netstat -ano | findstr :3000
   ```

## ✅ Current Status

- ✅ Frontend fully working
- ✅ Main page accessible
- ✅ Loan page accessible
- ✅ All components integrated
- ✅ Images loading correctly
- ✅ Mock data working
- ⏳ Backend integration (optional, future)

