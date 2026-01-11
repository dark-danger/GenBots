# 🔧 "Web Server Returned Unknown Error" - Complete Fix

## ❌ Problem
Frontend deploy hogaya but backend se connect nahi ho raha.

---

## ✅ Step-by-Step Solution

### Step 1: Check Vercel Environment Variable

1. **Vercel Dashboard** open karein: https://vercel.com/dashboard
2. Apna project select karein
3. **Settings** > **Environment Variables**

**Check karein:**
```
Name:  VITE_BACKEND_URL
Value: <your-railway-backend-url>
```

⚠️ **Important Checks:**
- Variable name `VITE_BACKEND_URL` hai (NOT `REACT_APP_BACKEND_URL`)
- Value mein `https://` hai
- Value mein trailing `/` NAHI hai
- All environments checked hain (Production, Preview, Development)

**Example Correct URL:**
```
VITE_BACKEND_URL=https://genbots-backend-production.up.railway.app
```

❌ **Wrong:**
```
VITE_BACKEND_URL=https://genbots-backend-production.up.railway.app/
VITE_BACKEND_URL=https://genbots-backend-production.up.railway.app/api
```

---

### Step 2: Redeploy After Adding Variable

Environment variable add karne ke baad **MUST REDEPLOY!**

#### Option A: GitHub Push (Recommended)
```bash
git commit --allow-empty -m "Trigger redeploy for env vars"
git push
```

#### Option B: Vercel Dashboard
1. **Deployments** tab
2. Latest deployment > **... menu**
3. **Redeploy**
4. ✅ Uncheck "Use existing Build Cache"
5. **Redeploy** confirm

Wait 2-3 minutes for deployment to complete.

---

### Step 3: Backend Check Karein

#### Check 1: Backend Running Hai?

Railway Dashboard open karein:
1. Check **Status**: Should be "Active" or "Running"
2. Check **Logs**: Koi errors nahi hone chahiye

#### Check 2: Backend URL Test Karein

Browser mein open karein:
```
https://your-backend-url.railway.app/api/
```

**Expected Response:**
```json
{"message": "GenBots API - Building Future Innovators"}
```

❌ **If Error:**
- Backend deploy nahi hua
- MongoDB connect nahi hai
- Environment variables missing hain

---

### Step 4: Browser Console Check Karein

1. Frontend URL open karein
2. **F12** press karein (Developer Tools)
3. **Console** tab dekhen

**Common Errors:**

#### Error 1: "VITE_BACKEND_URL is undefined"
```javascript
// Console mein test karein
console.log(import.meta.env.VITE_BACKEND_URL)
```

**Fix:**
- Environment variable add karein Vercel mein
- Redeploy karein

#### Error 2: "Network Error" / "Failed to fetch"
```
Network Error at ...
```

**Fix:**
- Backend URL verify karein
- Backend running hai check karein
- Railway logs dekhen

#### Error 3: "CORS Error"
```
Access to fetch ... has been blocked by CORS policy
```

**Fix:**
- Backend mein CORS already enabled hai
- Backend redeploy karein
- Check `server.py` mein:
```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Should be present
    ...
)
```

---

### Step 5: Network Tab Check Karein

1. **F12** > **Network** tab
2. Admin login try karein ya koi page open karein
3. Failed requests dekhen

**Check:**
- Request URL correct hai?
- Status code kya hai?
  - 404 = Backend endpoint missing
  - 500 = Backend error
  - CORS = Cross-origin issue
  - Failed = Backend not reachable

---

## 🛠️ Complete Checklist

### Backend Setup:
- [ ] MongoDB Atlas cluster running
- [ ] Railway backend deployed
- [ ] Railway environment variables set:
  - `MONGO_URL`
  - `DB_NAME`
  - `JWT_SECRET_KEY`
- [ ] Backend URL accessible
- [ ] `/api/` endpoint responding

### Frontend Setup:
- [ ] Vercel deployed successfully
- [ ] Environment variable added: `VITE_BACKEND_URL`
- [ ] Redeployed after adding variable
- [ ] No console errors
- [ ] Network requests going to correct URL

### Connection:
- [ ] Backend URL correct (https://)
- [ ] No trailing slash in URL
- [ ] CORS enabled on backend
- [ ] MongoDB connected to backend

---

## 🧪 Manual Testing

### Test 1: Environment Variable

Open browser console on your Vercel site:
```javascript
console.log(import.meta.env.VITE_BACKEND_URL)
```

Should print your Railway URL.

### Test 2: API Call

Open browser console:
```javascript
fetch(import.meta.env.VITE_BACKEND_URL + '/api/')
  .then(r => r.json())
  .then(d => console.log(d))
```

Should print: `{message: "GenBots API - Building Future Innovators"}`

### Test 3: Login

1. Go to `/admin/login`
2. Enter credentials:
   - Email: `khannayash394@gmail.com`
   - Password: `9996171216`
3. Click Login
4. Should redirect to dashboard

---

## 🚨 Common Mistakes

### Mistake 1: Wrong Variable Name
❌ `REACT_APP_BACKEND_URL` (Old CRA)
✅ `VITE_BACKEND_URL` (New Vite)

### Mistake 2: Forgot to Redeploy
- Adding environment variable doesn't auto-update
- MUST redeploy after adding variable

### Mistake 3: Backend Not Deployed
- Frontend alone won't work
- Backend + Database both required

### Mistake 4: Trailing Slash
❌ `https://backend.railway.app/`
✅ `https://backend.railway.app`

---

## 📊 Architecture Check

Your setup should be:

```
[User Browser]
     ↓
[Vercel Frontend]
     ↓ (VITE_BACKEND_URL)
[Railway Backend]
     ↓ (MONGO_URL)
[MongoDB Atlas]
```

**All 3 must be working!**

---

## 🆘 Still Not Working?

### Quick Debug Commands

**1. Check Vercel Build Logs:**
```
Vercel Dashboard > Deployments > Latest > View Function Logs
```

Look for: "VITE_BACKEND_URL" in build output

**2. Check Railway Logs:**
```
Railway Dashboard > Deployments > View Logs
```

Look for: API requests, errors, MongoDB connection

**3. Test Backend Directly:**
```bash
curl https://your-backend.railway.app/api/
```

Should return JSON response.

---

## 📞 Need More Help?

**Provide These Details:**
1. Vercel URL
2. Railway URL
3. Screenshot of browser console errors
4. Screenshot of Network tab (failed requests)

**Contact:**
📧 khannayash394@gmail.com

---

## ✅ Success Indicators

When everything is working:

1. ✅ Homepage loads without errors
2. ✅ Console shows no errors
3. ✅ Admin login successful
4. ✅ Contact form submissions work
5. ✅ Projects page loads

---

**Most common issue: Environment variable missing or wrong name!**

**Fix:** Add `VITE_BACKEND_URL` in Vercel, then redeploy! 🚀
