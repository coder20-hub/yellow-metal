# Deployment Guide: Subdomain Setup for yellowmetal.co

This guide will help you deploy your React gold loan application to `app.yellowmetal.co` as a subdomain of your existing Figma Sites website.

## Prerequisites

- Vercel account (recommended) or Netlify
- Access to your domain DNS settings (yellowmetal.co)
- Environment variables configured
- Application tested locally

## Step 1: Environment Setup

1. **Copy environment variables:**
   ```bash
   cp .env.production .env.local
   ```

2. **Update production values in `.env.production`:**
   - Replace placeholder values with actual API keys
   - Set correct domain URLs
   - Configure database connections

## Step 2: Deploy to Vercel

### Option A: Using Vercel CLI (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy the application:**
   ```bash
   # For preview deployment
   npm run deploy:preview
   
   # For production deployment
   npm run deploy
   ```

4. **Follow the prompts:**
   - Set up and deploy: `Y`
   - Which scope: Select your account
   - Link to existing project: `N` (first time)
   - Project name: `yellowmetal-gold-loan-app`
   - Directory: `./` (root)

### Option B: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Import from your Git repository
4. Configure build settings:
   - Framework Preset: React
   - Build Command: `npm run build:production`
   - Output Directory: `dist`

## Step 3: Configure Custom Domain

### In Vercel Dashboard:

1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Add custom domain: `app.yellowmetal.co`
4. Vercel will provide DNS configuration instructions

### DNS Configuration:

Add these DNS records to your domain provider:

```
Type: CNAME
Name: app
Value: cname.vercel-dns.com
TTL: 300 (or Auto)
```

**Alternative A Record setup:**
```
Type: A
Name: app
Value: 76.76.19.61
TTL: 300
```

## Step 4: Environment Variables in Production

In Vercel Dashboard:
1. Go to "Settings" → "Environment Variables"
2. Add all variables from `.env.production`:

```
NODE_ENV=production
VITE_APP_DOMAIN=app.yellowmetal.co
VITE_MAIN_SITE_DOMAIN=yellowmetal.co
VITE_API_BASE_URL=https://app.yellowmetal.co/api
VITE_APP_URL=https://app.yellowmetal.co
# ... add all other variables
```

## Step 5: Link from Main Site

### Update your Figma Sites (yellowmetal.co) navigation:

Add these links to your main website:

```html
<!-- Primary CTA Button -->
<a href="https://app.yellowmetal.co" target="_blank" rel="noopener">
  Get Loan Now
</a>

<!-- Calculator Link -->
<a href="https://app.yellowmetal.co#calculator" target="_blank">
  Loan Calculator
</a>

<!-- Application Form -->
<a href="https://app.yellowmetal.co#application" target="_blank">
  Apply Online
</a>
```

### Navigation Menu Updates:
- **Loan Calculator** → `https://app.yellowmetal.co#calculator`
- **Apply Now** → `https://app.yellowmetal.co#application`
- **How It Works** → `https://app.yellowmetal.co#how-it-works`

## Step 6: Cross-Domain Navigation

### Back to Main Site Links:

Update your React app's navigation to link back to main site:

```tsx
// In your components, use these URLs:
const mainSiteUrl = "https://yellowmetal.co";

// Navigation links:
- About Us → `${mainSiteUrl}/about`
- Contact → `${mainSiteUrl}/contact`
- Blog → `${mainSiteUrl}/blog`
```

## Step 7: Testing Checklist

### Before Going Live:

- [ ] Test all forms and functionality
- [ ] Verify admin panel access (`app.yellowmetal.co?admin=true`)
- [ ] Check mobile responsiveness
- [ ] Test cross-browser compatibility
- [ ] Verify SSL certificate is active
- [ ] Test navigation between main site and app
- [ ] Check all environment variables are working
- [ ] Test loan calculator functionality
- [ ] Verify application form submissions

### Performance Optimization:

- [ ] Enable gzip compression (automatic in Vercel)
- [ ] Check Lighthouse scores
- [ ] Optimize images and assets
- [ ] Test loading speeds

## Step 8: Monitoring and Analytics

### Set up monitoring:

1. **Google Analytics:**
   - Add tracking ID to environment variables
   - Implement tracking in React app

2. **Error Monitoring:**
   - Consider Sentry or similar service
   - Add error boundaries

3. **Performance Monitoring:**
   - Use Vercel Analytics
   - Monitor Core Web Vitals

## Alternative Platforms

### Netlify Deployment:

1. Create `netlify.toml`:
```toml
[build]
  publish = "dist"
  command = "npm run build:production"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

2. Deploy via Netlify CLI or Git integration

## Troubleshooting

### Common Issues:

1. **DNS propagation delay:** Can take up to 48 hours
2. **SSL certificate issues:** Usually auto-resolves within 24 hours
3. **Build failures:** Check environment variables and dependencies
4. **CORS issues:** Ensure proper domain configuration

### Support Resources:

- Vercel Documentation: https://vercel.com/docs
- DNS Checker: https://dnschecker.org
- SSL Checker: https://www.sslshopper.com/ssl-checker.html

## Security Considerations

- Use HTTPS only (automatic with Vercel)
- Implement proper CORS policies
- Secure admin panel access
- Regular security updates
- Environment variable protection

## Post-Deployment Steps

1. Update main site with new links
2. Submit sitemap to search engines
3. Set up monitoring and alerts
4. Regular backups and updates
5. Performance optimization
6. User feedback collection

Your React gold loan application will now be accessible at `app.yellowmetal.co` while your main marketing site remains on Figma Sites at `yellowmetal.co`.