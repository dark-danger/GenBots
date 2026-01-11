# ⚡ Quick Fix Checklist - Web Server Error

## 1️⃣ Backend Deploy Kiya? (MOST IMPORTANT!)

❌ **Nahi** → Backend deploy karo pehle!
- Follow: `/app/BACKEND_DEPLOY_HINDI.md`
- Railway par deploy karo
- 15-20 minutes lagenge

✅ **Haan** → Next step

---

## 2️⃣ Environment Variable Added?

Vercel Dashboard > Settings > Environment Variables

**Add this:**
```
Name:  VITE_BACKEND_URL
Value: https://your-railway-backend.railway.app
```

⚠️ **Note:** Name exactly `VITE_BACKEND_URL` hona chahiye!

✅ Done? → Next step

---

## 3️⃣ Redeploy Kiya?

Variable add karne ke baad **MUST REDEPLOY!**

**Quick Method:**
```bash
git commit --allow-empty -m "Add backend URL"
git push
```

Wait 2-3 minutes...

✅ Done? → Next step

---

## 4️⃣ Backend Test Karein

Browser mein open karein:
```
https://your-railway-url.railway.app/api/
```

**Should show:**
```json
{"message": "GenBots API - Building Future Innovators"}
```

❌ Error? → Backend issue hai, Railway logs check karo
✅ Working? → Next step

---

## 5️⃣ Frontend Console Check

1. F12 press karein
2. Console tab open karein
3. Type karein:
```javascript
console.log(import.meta.env.VITE_BACKEND_URL)
```

**Should print:** Your Railway URL

❌ `undefined`? → Variable add nahi hua, step 2 & 3 repeat karo
✅ URL shows? → All good!

---

## 6️⃣ Test Login

1. `/admin/login` par jayein
2. Login credentials:
   - Email: `khannayash394@gmail.com`
   - Password: `9996171216`
3. Login click karein

✅ **Dashboard opens?** → SUCCESS! 🎉
❌ **Error?** → Console errors dekho, backend logs check karo

---

## 🎯 Most Common Issue

**90% cases mein problem:**
1. Backend deploy nahi kiya ❌
2. Environment variable missing ❌
3. Variable name galat (`REACT_APP_` instead of `VITE_`) ❌
4. Redeploy nahi kiya after adding variable ❌

**Fix:** Upar ke steps exactly follow karo! ✅

---

## 📚 Detailed Guides

- MongoDB Setup: `/app/MONGODB_SETUP_HINDI.md`
- Backend Deploy: `/app/BACKEND_DEPLOY_HINDI.md`
- Connection Setup: `/app/FRONTEND_BACKEND_CONNECTION_HINDI.md`
- Error Debugging: `/app/WEB_SERVER_ERROR_FIX.md`

---

## 📞 Contact

**Still stuck?**
Email: khannayash394@gmail.com

Include:
- Vercel URL
- Railway URL (if deployed)
- Console errors screenshot

---

**Time to fix: 5-10 minutes (if backend already deployed)**
**Time to fix: 30 minutes (if backend not deployed)**

**Good luck! 🚀**
