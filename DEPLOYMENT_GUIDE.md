# GenBots - Complete Deployment Guide

## 🎯 Overview

**Frontend:** Vercel (Free)
**Backend:** Railway (Free) 
**Database:** MongoDB Atlas (Free)

---

## 📋 Step-by-Step Complete Deployment

### Part 1: Backend Deploy (Pehle Backend!)

#### 1.1 MongoDB Atlas Setup

1. **https://www.mongodb.com/cloud/atlas** par jayein
2. Sign up karein (Google se bhi kar sakte hain)
3. **"Create a Free Cluster"** click karein
4. **Cluster Configure karein:**
   - Provider: AWS
   - Region: Mumbai (ap-south-1) - closest to India
   - Cluster Tier: M0 Sandbox (FREE)
   - Cluster Name: GenBots
5. **Create Cluster** (2-3 minutes lagega)

#### 1.2 Database User Create karein

1. **Security** > **Database Access**
2. **Add New Database User**
   - Username: `genbots_admin`
   - Password: Strong password generate karein (save kar lein!)
   - Database User Privileges: **Read and write to any database**
3. **Add User**

#### 1.3 Network Access Allow karein

1. **Security** > **Network Access**
2. **Add IP Address**
3. **"Allow Access from Anywhere"** select karein (0.0.0.0/0)
4. **Confirm**

#### 1.4 Connection String Copy karein

1. **Deployment** > **Database** > **Connect**
2. **"Connect your application"** select karein
3. **Driver:** Python, **Version:** 3.12 or later
4. Connection string copy karein:
```
mongodb+srv://genbots_admin:<password>@genbots.xxxxx.mongodb.net/?retryWrites=true&w=majority
```
5. `<password>` replace karein apne actual password se

#### 1.5 Backend GitHub Repository

```bash
cd /app/backend
git init
git add .
git commit -m "Initial commit: GenBots backend"
git branch -M main

# GitHub par new repository create karein: genbots-backend
# Then:
git remote add origin https://github.com/YOUR_USERNAME/genbots-backend.git
git push -u origin main
```

#### 1.6 Railway Deploy

1. **https://railway.app** par jayein
2. **"Start a New Project"** > **"Deploy from GitHub repo"**
3. **genbots-backend** repository select karein
4. **Add variables** tab mein:
   ```
   MONGO_URL = mongodb+srv://genbots_admin:password@cluster.mongodb.net/
   DB_NAME = genbots
   JWT_SECRET_KEY = genbots-super-secret-key-2025
   PORT = 8001
   ```
5. Deploy hone ka wait karein (5-7 minutes)
6. **Settings** > **Networking** > **Generate Domain**
7. **Backend URL copy karein:** `http://genbots-production.up.railway.app`

---

### Part 2: Frontend Deploy (Backend ke baad!)

#### 2.1 Frontend GitHub Repository

```bash
cd /app/frontend
git init
git add .
git commit -m "Initial commit: GenBots frontend"
git branch -M main

# GitHub par new repository create karein: genbots-frontend
# Then:
git remote add origin https://github.com/YOUR_USERNAME/genbots-frontend.git
git push -u origin main
```

#### 2.2 Vercel Deploy

1. **https://vercel.com** par jayein
2. **"Add New Project"** > **"Import Git Repository"**
3. **genbots-frontend** select karein
4. **Configure Project:**
   - Framework Preset: **Create React App** (auto-detect)
   - Build Command: `yarn build`
   - Output Directory: `build`
   - Install Command: `yarn install`

5. **Environment Variables Add karein:**
   ```
   Name: REACT_APP_BACKEND_URL
   Value: http://genbots-production.up.railway.app
   (Railway se copy kiya hua URL)
   ```

6. **Deploy** click karein (2-3 minutes)
7. **Live URL milega:** `https://genbots-frontend.vercel.app`

---

## ✅ Deployment Complete - Test Karein!

### Frontend Test:
1. Vercel URL open karein
2. Website load hona chahiye
3. Pages navigate karke dekh lein (Home, About, Programs, etc.)

### Backend Test:
1. Railway URL + `/api/` open karein browser mein
2. Response aana chahiye: `{"message": "GenBots API - Building Future Innovators"}`

### Admin Panel Test:
1. Frontend URL + `/admin/login` open karein
2. Login karein:
   - Email: `khannayash394@gmail.com`
   - Password: `9996171216`
3. Dashboard load hona chahiye!

### Contact Form Test:
1. Contact page par jayein
2. Form fill karke submit karein
3. Admin panel > Contacts mein entry dikhayi deni chahiye

---

## 🔧 Post-Deployment Setup

### Custom Domain (Optional)

**Frontend (Vercel):**
1. Vercel Dashboard > Settings > Domains
2. Add domain: `www.genbots.com`
3. DNS records update karein

**Backend (Railway):**
1. Railway Dashboard > Settings > Networking
2. Custom domain add karein: `api.genbots.com`
3. DNS CNAME record add karein

### SSL Certificate
Dono platforms (Vercel & Railway) automatic SSL provide karte hain. Kuch karna nahi padega!

---

## 📊 Monitor Karein

### Vercel Analytics:
- Dashboard > Analytics
- Visitors, page views, etc.

### Railway Logs:
- Dashboard > Deployments > View Logs
- Real-time backend logs

### MongoDB Monitoring:
- Atlas Dashboard > Metrics
- Storage, connections, queries

---

## 💰 Cost Breakdown

| Service | Plan | Cost |
|---------|------|------|
| Frontend (Vercel) | Hobby | **FREE** |
| Backend (Railway) | Starter | **FREE** ($5 credit/month) |
| Database (MongoDB Atlas) | M0 Free Tier | **FREE** |
| **Total** | | **₹0/month** |

**Free tier limits:**
- Vercel: 100GB bandwidth
- Railway: 500 hours/month (enough for 24/7)
- MongoDB: 512MB storage

Small business ke liye perfect!

---

## 🐛 Common Issues & Solutions

### "Cannot connect to backend"
**Fix:**
1. Railway backend check karein (running hai?)
2. Vercel environment variable check karein
3. Backend URL `https://` se start hona chahiye
4. CORS enabled hai (already hai code mein)

### "MongoDB connection failed"
**Fix:**
1. MongoDB Atlas connection string verify karein
2. Password correct hai?
3. Network access whitelist check karein (0.0.0.0/0)
4. Database user privileges check karein

### "Build failed on Vercel"
**Fix:**
1. Locally `yarn build` run karein
2. Errors fix karein
3. Push to GitHub
4. Vercel auto-redeploy karega

### "Admin login not working"
**Fix:**
1. Backend logs check karein Railway mein
2. Admin user created hai? (automatic hona chahiye)
3. JWT_SECRET_KEY set hai Railway mein?

---

## 🔄 Update Kaise Karein (Future Changes)

### Frontend Update:
```bash
cd /app/frontend
# Changes karein
git add .
git commit -m "Updated frontend"
git push
# Vercel automatic deploy karega!
```

### Backend Update:
```bash
cd /app/backend
# Changes karein
git add .
git commit -m "Updated backend"
git push
# Railway automatic deploy karega!
```

---

## 📞 Support

**Issues?**
- Email: khannayash394@gmail.com
- Phone: +91 92110 67540

**Resources:**
- Vercel Docs: https://vercel.com/docs
- Railway Docs: https://docs.railway.app
- MongoDB Docs: https://docs.mongodb.com

---

## 🎉 Congratulations!

Aapka GenBots website ab live hai! Share karein:

🌐 **Live Website:** `https://genbots-frontend.vercel.app`

🚀 **Happy Deploying!**
