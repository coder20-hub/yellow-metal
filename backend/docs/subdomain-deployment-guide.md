# Subdomain Deployment Guide - app.yellowmetal.co

## Prerequisites
- Domain `yellowmetal.co` already owned and configured
- Vercel account connected to your repository
- All environment variables configured

## Step-by-Step Deployment Process

### Step 1: Prepare Your Repository
```bash
# Ensure all changes are committed
git add .
git commit -m "Prepare for subdomain deployment"
git push origin main
```

### Step 2: Vercel Project Configuration
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project" or select your existing project
3. Import your repository
4. Configure build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### Step 3: Environment Variables Setup
In Vercel Dashboard → Project Settings → Environment Variables:

**Production Environment:**
```
NODE_ENV=production
VITE_API_BASE_URL=https://app.yellowmetal.co/api
VITE_SITE_URL=https://app.yellowmetal.co
VITE_MAIN_SITE_URL=https://yellowmetal.co

# Database & API Keys (add your actual values)
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
VITE_NOTION_TOKEN=your_notion_token
VITE_NOTION_DATABASE_ID=your_database_id

# Admin Configuration
VITE_ADMIN_EMAIL=your_admin_email
VITE_ADMIN_PASSWORD_HASH=your_password_hash
```

### Step 4: Domain Configuration in Vercel
1. Go to Project Settings → Domains
2. Add your subdomain: `app.yellowmetal.co`
3. Vercel will provide DNS configuration details

### Step 5: DNS Configuration
**Option A: Using Vercel Nameservers (Recommended)**
1. Transfer your domain to use Vercel's nameservers
2. Vercel will automatically handle subdomain routing

**Option B: Using Your Current DNS Provider**
Add these DNS records to your domain provider:

```
Type: CNAME
Name: app
Value: cname.vercel-dns.com
TTL: 300 (or default)
```

**Option C: Using A Records (if CNAME doesn't work)**
```
Type: A
Name: app
Value: 76.76.19.61
TTL: 300

Type: A  
Name: app
Value: 76.223.126.88
TTL: 300
```

### Step 6: Update Vercel Configuration
Ensure your `vercel.json` is configured for subdomain routing:

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

### Step 7: Deploy to Production
```bash
# Deploy via Git (Automatic)
git push origin main

# Or deploy via Vercel CLI
npx vercel --prod
```

### Step 8: Verify Deployment
1. **Check Build Logs**: Monitor the deployment in Vercel Dashboard
2. **Test Subdomain**: Visit `https://app.yellowmetal.co`
3. **Test Admin Panel**: Visit `https://app.yellowmetal.co?admin=true`
4. **Test API Endpoints**: Verify all backend functionality works
5. **Cross-Site Navigation**: Test links between main site and app

### Step 9: SSL Certificate
Vercel automatically provisions SSL certificates for custom domains. Verify:
- ✅ `https://app.yellowmetal.co` loads with valid SSL
- ✅ HTTP redirects to HTTPS automatically

### Step 10: Performance & SEO
1. **Test Performance**: Use Google PageSpeed Insights
2. **Verify Meta Tags**: Check social media previews
3. **Test Mobile Responsiveness**: Ensure mobile compatibility
4. **Check Loading Speed**: Optimize if needed

## Troubleshooting Common Issues

### Issue 1: DNS Propagation Delay
- DNS changes can take 24-48 hours to propagate globally
- Use `dig app.yellowmetal.co` to check DNS status
- Test from different locations using online DNS checkers

### Issue 2: Build Failures
```bash
# Common fixes
npm install
npm run build  # Test build locally
rm -rf node_modules package-lock.json
npm install    # Clean reinstall
```

### Issue 3: Environment Variables Not Working
- Ensure all VITE_ prefixed variables are set in Vercel
- Redeploy after adding new environment variables
- Check environment variable precedence (Production > Preview > Development)

### Issue 4: API Routes Not Working
- Verify API routes are in `/api` folder
- Check Vercel Functions limits and configuration
- Ensure correct CORS headers if calling from different origins

## Cross-Site Integration

### Navigation Between Sites
Update your main site (`yellowmetal.co`) to link to the app:
```html
<a href="https://app.yellowmetal.co">Launch Gold Loan App</a>
```

### Shared Branding
Ensure consistent branding across:
- Favicon and app icons
- Meta tags and social previews  
- Color scheme and typography
- Logo and brand elements

## Monitoring & Maintenance

### Analytics Setup
1. Add Google Analytics to both domains
2. Set up Vercel Analytics
3. Monitor Core Web Vitals
4. Track user flows between sites

### Backup Strategy
1. Regular database backups
2. Environment variable documentation
3. Code repository maintenance
4. Domain renewal tracking

## Quick Command Reference

```bash
# Local development
npm run dev

# Production build test
npm run build
npm run preview

# Vercel deployment
npx vercel                    # Preview deployment
npx vercel --prod            # Production deployment
npx vercel domains add app.yellowmetal.co  # Add domain via CLI

# DNS verification
dig app.yellowmetal.co
nslookup app.yellowmetal.co

# SSL verification
curl -I https://app.yellowmetal.co
```

## Final Checklist
- [ ] Repository pushed to main branch
- [ ] Vercel project configured
- [ ] Environment variables set
- [ ] Domain added to Vercel
- [ ] DNS records configured
- [ ] SSL certificate active
- [ ] All pages loading correctly
- [ ] Admin panel accessible
- [ ] API endpoints working
- [ ] Mobile responsive
- [ ] Performance optimized
- [ ] Analytics configured
- [ ] Cross-site navigation working

Your app should now be live at `https://app.yellowmetal.co`! 🚀