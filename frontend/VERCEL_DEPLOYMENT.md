# GenBots Frontend - Vercel Deployment Guide

## 🚀 Vercel par Deploy Kaise Karein

### Step 1: GitHub Repository Banayein

1. **GitHub par new repository create karein:**
```bash
cd /app/frontend
git init
git add .
git commit -m "Initial commit: GenBots frontend"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/genbots-frontend.git
git push -u origin main
```

### Step 2: Vercel Setup

1. **Vercel website par jayein:** https://vercel.com
2. **Sign up/Login** karein (GitHub se)
3. **"Add New Project"** click karein
4. **Import Git Repository:**
   - Apna `genbots-frontend` repository select karein
   - Import par click karein

### Step 3: Configure Deployment

**Framework Preset:** Create React App (auto-detect hoga)

**Build Settings:**
- Build Command: `yarn build`
- Output Directory: `build`
- Install Command: `yarn install`
- Node Version: `24.x` (automatic from .nvmrc)

**Environment Variables Add Karein:**

```
REACT_APP_BACKEND_URL = https://your-backend-url.com
```

> **Important:** Backend URL add karna mandatory hai!

### Step 4: Deploy!

"Deploy" button click karein. 2-3 minutes mein deploy ho jayega!

## 🔧 Environment Variable Kaise Add Karein

1. Vercel Dashboard mein apna project open karein
2. **Settings** > **Environment Variables** jayein
3. Add karein:
   - **Name:** `REACT_APP_BACKEND_URL`
   - **Value:** `https://your-backend-url.com` (apna backend URL)
   - **Environment:** Production, Preview, Development (all select karein)
4. **Save** karein
5. **Redeploy** karein

## 🔄 Auto-Deploy Setup

Vercel automatically deploy karega jab bhi aap code push karenge GitHub par:

```bash
git add .
git commit -m "Updated code"
git push
```

2-3 minutes mein changes live ho jayenge!

## 🌐 Custom Domain Setup

1. Vercel Dashboard > **Settings** > **Domains**
2. Apna domain add karein (e.g., `genbots.com`)
3. DNS records update karein (Vercel instructions provide karega)

## 📱 Preview Deployments

Har Git branch ke liye automatic preview URL milega:
- Main branch: Production URL
- Other branches: Preview URLs

## 🐛 Troubleshooting

**Build fail ho raha hai?**
```bash
# Locally test karein
yarn build
```

**Backend connect nahi ho raha?**
- Environment variable check karein
- CORS backend mein enabled hai (already hai)
- Backend URL `https://` se start hona chahiye

**Routing issues?**
- `vercel.json` file check karein (already configured hai)

## 📊 Deployment Stats

- **Build Time:** 2-3 minutes
- **Deploy Time:** 30 seconds
- **Auto-deploy:** Yes
- **Preview URLs:** Yes
- **Custom Domains:** Yes
- **Free Tier:** Perfect for portfolios!

## 🔗 Useful Links

- Vercel Dashboard: https://vercel.com/dashboard
- Documentation: https://vercel.com/docs
- Support: https://vercel.com/support

---

**Need Help?**
Contact: khannayash394@gmail.com
