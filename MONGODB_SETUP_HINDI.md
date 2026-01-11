# 🗄️ MongoDB Atlas Setup Guide (Hindi)

## Step 1: Account Banayein

1. **Website:** https://www.mongodb.com/cloud/atlas/register
2. **Sign up** karein (Google account se bhi kar sakte hain)
3. Free tier select karein

---

## Step 2: Cluster Create Karein

1. **"Create a Free Cluster"** click karein
2. **Configuration:**
   - Provider: **AWS**
   - Region: **Mumbai (ap-south-1)** - India ke liye fastest
   - Cluster Tier: **M0 Sandbox (FREE)**
   - Cluster Name: `genbots-cluster`

3. **Create Cluster** (2-3 minutes lagega)

---

## Step 3: Database User Banayein

1. Left menu > **Security** > **Database Access**
2. **"Add New Database User"** click karein
3. **Configuration:**
   ```
   Username: genbots_admin
   Password: (Generate Secure Password)
   ```
   **⚠️ Password COPY kar lein - baad mein chahiye!**

4. Database User Privileges: **"Read and write to any database"**
5. **"Add User"** click karein

---

## Step 4: Network Access Allow Karein

1. Left menu > **Security** > **Network Access**
2. **"Add IP Address"** click karein
3. **"Allow Access from Anywhere"** select karein
   - Automatically `0.0.0.0/0` add ho jayega
4. **"Confirm"** click karein

⚠️ **Important:** Ye production mein insecure hai, but learning ke liye theek hai.

---

## Step 5: Connection String Copy Karein

1. Left menu > **Deployment** > **Database**
2. Apna cluster ke paas **"Connect"** button click karein
3. **"Connect your application"** select karein
4. **Driver:** Python, **Version:** 3.12 or later
5. **Connection string dikhai dega:**
   ```
   mongodb+srv://genbots_admin:<password>@genbots-cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

6. **Copy karein aur save karein!**
7. `<password>` ko apne actual password se replace karein

**Example:**
```
mongodb+srv://genbots_admin:MySecurePass123@genbots-cluster.abc123.mongodb.net/?retryWrites=true&w=majority
```

---

## ✅ Done! MongoDB Ready

Ab aapka database ready hai. Is connection string ko backend deployment mein use karenge.

---

## 📊 Free Tier Limits

- **Storage:** 512 MB (5000+ records ke liye enough)
- **Connections:** Shared cluster
- **Bandwidth:** Limited but sufficient
- **Cost:** ₹0 - Completely FREE!

---

## 🔍 Database Access Kaise Karein?

**MongoDB Compass (Desktop App):**
1. Download: https://www.mongodb.com/try/download/compass
2. Install karein
3. Connection string paste karein
4. Connect!

**Web Interface:**
1. Atlas Dashboard > Database > Browse Collections
2. Data directly dekh aur edit kar sakte hain

---

## ⚠️ Common Issues

**Issue 1: Connection timeout**
- Network Access check karein (0.0.0.0/0 allowed hai?)
- Internet connection stable hai?

**Issue 2: Authentication failed**
- Username/password verify karein
- Password mein special characters hai? Encode karein

**Issue 3: Database not found**
- First connection par database automatically create hota hai
- Manually create: Database > Create Database

---

## 📞 Need Help?

Email: khannayash394@gmail.com

**MongoDB Atlas Docs:** https://docs.atlas.mongodb.com/

---

**Next Step:** Backend deploy karna Railway par!
