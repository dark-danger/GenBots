# 🚂 Railway Backend Deployment - Complete Hindi Guide

## Step 1: GitHub Repository Banayein

```bash
# Backend folder mein jayein
cd /app/backend

# Git initialize karein
git init

# All files add karein
git add .

# First commit
git commit -m "Initial commit: GenBots backend"

# Main branch banayein
git branch -M main
```

### GitHub par Repository Create karein:

1. https://github.com/new par jayein
2. **Repository name:** `genbots-backend`
3. **Public** select karein
4. **Create repository** click karein

```bash
# GitHub repository connect karein
git remote add origin https://github.com/YOUR_USERNAME/genbots-backend.git

# Push karein
git push -u origin main
```

---

## Step 2: Railway Account Banayein

1. **Website:** https://railway.app
2. **"Login with GitHub"** click karein
3. Railway ko GitHub access allow karein

---

## Step 3: New Project Create Karein

1. Railway Dashboard > **"New Project"**
2. **"Deploy from GitHub repo"** select karein
3. **Install Railway app** (if first time)
4. Apna **`genbots-backend`** repository select karein
5. **Deploy** click karein

⏳ Railway automatically detect kar lega ki ye Python app hai!

---

## Step 4: Environment Variables Add Karein

Railway Dashboard > **Variables** tab mein jayein:

### Required Variables:

```env
MONGO_URL=mongodb+srv://genbots_admin:yourpassword@cluster.mongodb.net/
DB_NAME=genbots
JWT_SECRET_KEY=genbots-super-secret-key-2025-change-this
PORT=8001
```

**IMPORTANT:**
- `MONGO_URL` - MongoDB Atlas se copy kiya hua connection string
- `<password>` replace karein actual password se
- `JWT_SECRET_KEY` - Koi bhi random strong password

### Kaise Add Karein:

1. **"New Variable"** click karein
2. **Variable name** enter karein (e.g., `MONGO_URL`)
3. **Value** paste karein
4. **Add** click karein
5. Repeat for all variables

---

## Step 5: Domain Generate Karein

1. Railway Dashboard > **Settings** tab
2. **Networking** section
3. **"Generate Domain"** click karein
4. Domain milega jaise:
   ```
   http://genbots-production.up.railway.app
   ```

**⚠️ IS URL KO COPY KAR LEIN! Frontend mein use hoga!**

---

## Step 6: Deployment Check Karein

### Build Logs Check karein:

1. **Deployments** tab > Latest deployment
2. **View Logs** click karein
3. Dekhen:
   ```
   ✅ Installing dependencies...
   ✅ Starting server...
   ✅ Application startup complete
   ```

### Test karein:

Browser mein open karein:
```
https://your-backend-url.up.railway.app/api/
```

Response milna chahiye:
```json
{"message": "GenBots API - Building Future Innovators"}
```

✅ **Working hai!** Backend deploy ho gaya!

---

## Step 7: Admin User Check Karein

Backend automatically admin user create karta hai on first startup.

**Check Logs:**
```
INFO - Admin user created successfully
```

**Login Credentials:**
- Email: `khannayash394@gmail.com`
- Password: `9996171216`

---

## 🔧 Configuration Details

Railway automatically detect karta hai:

**Detected:**
- Language: Python
- Framework: FastAPI
- Port: 8001 (from environment variable)

**Build Command:**
```bash
pip install -r requirements.txt
```

**Start Command:**
```bash
uvicorn server:app --host 0.0.0.0 --port $PORT
```

**Already configured in your code!** ✅

---

## 📊 Monitor Karein

Railway Dashboard mein:

1. **Metrics Tab:**
   - CPU usage
   - Memory usage
   - Request count

2. **Logs Tab:**
   - Real-time logs
   - Error tracking
   - Request logs

3. **Deployments Tab:**
   - Build history
   - Rollback option

---

## 🔄 Auto-Deploy Setup

Har GitHub push par automatic deploy:

```bash
cd /app/backend

# Changes karein
# ... code edit ...

# Commit aur push
git add .
git commit -m "Updated feature"
git push

# Railway automatically redeploy karega!
```

---

## 💰 Free Tier Details

**Railway Free Plan:**
- **$5 free credits per month**
- **500 hours execution time** (~20 days 24/7)
- **1 GB RAM**
- **1 GB disk**

**Perfect for:**
- Small projects
- Testing
- Personal portfolios
- Low traffic apps

---

## ⚠️ Common Issues

### Issue 1: Build Failed

**Check:**
- `requirements.txt` correct hai?
- Python version compatible hai?

**Fix:**
```bash
# Locally test karein
pip install -r requirements.txt
uvicorn server:app --reload
```

### Issue 2: Application not responding

**Check:**
- Environment variables set hain?
- PORT variable Railway automatically set karta hai
- MongoDB connection string correct hai?

**Fix:**
- Logs check karein
- Error messages padh kar fix karein

### Issue 3: MongoDB connection failed

**Check:**
- Connection string correct hai?
- Password encode hai? (special characters)
- Network Access 0.0.0.0/0 allowed hai?

**Fix:**
- MongoDB Atlas dashboard check karein
- New connection string generate karein

---

## 🌐 Custom Domain (Optional)

1. Railway Dashboard > **Settings**
2. **Networking** > **Custom Domains**
3. Domain add karein (e.g., `api.genbots.com`)
4. DNS CNAME record add karein:
   ```
   Type: CNAME
   Name: api
   Value: <railway-provided-domain>
   ```

---

## 📁 Files Check karein

Backend folder mein ye files honi chahiye:

```
backend/
├── server.py          ✅ Main application
├── models.py          ✅ Database models
├── auth.py            ✅ Authentication
├── requirements.txt   ✅ Dependencies
├── .env              ✅ Local env (not in Git)
├── .gitignore        ✅ Ignore files
└── README.md         ✅ Documentation
```

---

## 🎯 Success Checklist

- [ ] MongoDB cluster created
- [ ] Database user created
- [ ] Network access allowed
- [ ] Connection string saved
- [ ] GitHub repository created
- [ ] Railway project created
- [ ] Environment variables added
- [ ] Domain generated
- [ ] API responding
- [ ] Admin user created
- [ ] Backend URL copied

**All done?** 🎉

---

## 📞 Support

**Issues?**
- Email: khannayash394@gmail.com
- Railway Docs: https://docs.railway.app
- Community: https://discord.gg/railway

---

## 🚀 Next Step

**Backend URL ko Frontend mein add karein!**

Vercel Dashboard > Environment Variables:
```
REACT_APP_BACKEND_URL = https://your-railway-url.railway.app
```

---

**Backend Successfully Deployed! 🎊**
