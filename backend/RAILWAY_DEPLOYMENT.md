# GenBots Backend - Railway Deployment Guide

## 🚀 Railway par Deploy Kaise Karein

> **Why Railway?** Backend ke liye best free option. Vercel serverless functions se better performance.

### Step 1: GitHub Repository Banayein

```bash
cd /app/backend
git init
git add .
git commit -m "Initial commit: GenBots backend"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/genbots-backend.git
git push -u origin main
```

### Step 2: Railway Setup

1. **Railway website par jayein:** https://railway.app
2. **Sign up** with GitHub
3. **"New Project"** click karein
4. **"Deploy from GitHub repo"** select karein
5. Apna `genbots-backend` repository select karein

### Step 3: Configuration

**Railway automatically detect kar lega Python app.**

**Environment Variables Add Karein:**

Railway Dashboard > Variables tab mein:

```
MONGO_URL = mongodb+srv://username:password@cluster.mongodb.net/
DB_NAME = genbots
JWT_SECRET_KEY = your-secret-key-here
PORT = 8001
```

### Step 4: MongoDB Setup (Free)

**Option A: MongoDB Atlas (Recommended)**

1. https://www.mongodb.com/cloud/atlas par jayein
2. Free cluster create karein
3. Database user create karein
4. Network Access mein `0.0.0.0/0` allow karein (all IPs)
5. Connection string copy karein
6. Railway mein `MONGO_URL` add karein

**Option B: Railway MongoDB Plugin**

1. Railway Dashboard > "New" > "Database" > "MongoDB"
2. Automatically `MONGO_URL` set ho jayega

### Step 5: Deploy!

Railway automatically deploy start karega. 5-7 minutes mein live!

**Your Backend URL:**
```
http://genbots-production.up.railway.app
```

Ye URL apne frontend ke environment variable mein use karein!

## 🔧 Settings Configuration

**Build Command:**
```bash
pip install -r requirements.txt
```

**Start Command:**
```bash
uvicorn server:app --host 0.0.0.0 --port $PORT
```

## 📁 Required Files (Already Created)

✅ `requirements.txt` - Dependencies
✅ `server.py` - Main application
✅ `.gitignore` - Git ignore rules

## 🔄 Auto-Deploy

GitHub push karne par automatic deploy:

```bash
git add .
git commit -m "Updated backend"
git push
```

## 🌐 Custom Domain (Optional)

1. Railway Dashboard > Settings > Domains
2. Add custom domain
3. Update DNS records

## 📊 Monitoring

Railway Dashboard mein dekh sakte hain:
- Live logs
- Resource usage (CPU, Memory)
- Build history
- Deployments

## 🐛 Troubleshooting

**Build fail ho raha hai?**
```bash
# Locally test karein
pip install -r requirements.txt
uvicorn server:app --reload
```

**MongoDB connect nahi ho raha?**
- Connection string check karein
- Network access whitelist check karein
- Database user credentials verify karein

**Port issues?**
- Railway automatically `PORT` environment variable set karta hai
- Code mein `os.environ.get('PORT', 8001)` use karein (already hai)

## 💰 Free Tier Limits

- **Railway Free Plan:**
  - $5 free credits monthly
  - Enough for 500 hours/month
  - Perfect for small projects

- **MongoDB Atlas Free:**
  - 512 MB storage
  - Shared cluster
  - Good for 1000+ users

## 🔗 Alternative Deployment Options

### Render.com

1. https://render.com
2. New Web Service
3. Connect GitHub repo
4. Environment: Python 3.11
5. Build: `pip install -r requirements.txt`
6. Start: `uvicorn server:app --host 0.0.0.0 --port $PORT`

### Heroku

Create `Procfile`:
```
web: uvicorn server:app --host 0.0.0.0 --port $PORT
```

Then:
```bash
heroku create genbots-backend
git push heroku main
```

## 📞 Need Help?

Contact: khannayash394@gmail.com

---

**Pro Tip:** Backend deploy hone ke baad URL copy karke frontend ke Vercel environment variable mein add kar dena!
