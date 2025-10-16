# 617 East Trust - Quick Deployment Guide

## Deploy to Vercel (Fastest Method)

### 1. Install Vercel CLI
```bash
npm i -g vercel
```

### 2. Login to Vercel
```bash
vercel login
```

### 3. Deploy
```bash
cd /home/ubuntu/617-east-trust
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- Project name? **617-east-trust**
- Directory? **./client** (or press Enter for root)
- Override settings? **N**

### 4. Add Environment Variables
```bash
vercel env add DATABASE_URL
# Paste your database URL when prompted

# Add other required variables
vercel env add JWT_SECRET
vercel env add OAUTH_SERVER_URL
# ... etc
```

### 5. Deploy to Production
```bash
vercel --prod
```

### 6. Add Custom Domain
```bash
vercel domains add 617east.com
```

Then update your DNS records as shown in the output.

---

## Environment Variables Needed

Copy these from your current deployment or Manus environment:

- `DATABASE_URL`
- `JWT_SECRET`
- `OAUTH_SERVER_URL`
- `OWNER_OPEN_ID`
- `OWNER_NAME`
- `VITE_APP_ID`
- `VITE_APP_TITLE`
- `VITE_APP_LOGO`
- `VITE_OAUTH_PORTAL_URL`
- `BUILT_IN_FORGE_API_KEY`
- `BUILT_IN_FORGE_API_URL`

---

## DNS Configuration

After deploying, configure your DNS at your domain registrar (e.g., GoDaddy, Namecheap):

### A Record (for root domain)
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`
- TTL: `3600`

### CNAME Record (for www)
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`
- TTL: `3600`

---

## Verify Deployment

1. Visit your domain: https://617east.com
2. Test all pages: Home, Services, Testimonials, Contact, Intake
3. Submit a test intake form
4. Check database for the submission

---

## Troubleshooting

**Issue**: Build fails
- Check that all dependencies are in `package.json`
- Verify Node.js version compatibility

**Issue**: Environment variables not working
- Ensure they're added in Vercel dashboard
- Redeploy after adding variables

**Issue**: 404 on page refresh
- `vercel.json` should handle this (already included)
- Verify the rewrite rules are in place

---

## Alternative: GitHub + Vercel Integration

1. Push code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/617-east-trust.git
git push -u origin main
```

2. Go to https://vercel.com/new
3. Import your GitHub repository
4. Configure build settings (auto-detected)
5. Add environment variables
6. Deploy!

This enables automatic deployments on every push to GitHub.

