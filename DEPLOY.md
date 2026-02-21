# Deploying to GitHub Pages

## Option A: No Git Required — Upload via Browser (Easiest)

> Works right now, no installation needed!

### Step 1 — Create a GitHub account & repo
1. Go to [github.com](https://github.com) and sign in (or sign up)
2. Click **+** → **New repository**
3. Name it exactly: `YOUR-USERNAME.github.io`  
   *(e.g. if your username is `nikhileshpadhi`, name it `nikhileshpadhi.github.io`)*
4. Set it to **Public**
5. Click **Create repository**

### Step 2 — Upload your files
1. In the new repo, click **Add file** → **Upload files**
2. Drag and drop ALL files from your project folder:
   ```
   index.html
   styles.css
   script.js
   assets/  (the whole folder)
   .gitignore
   DEPLOY.md
   ```
3. Scroll down, type a commit message like `Initial commit`
4. Click **Commit changes**

### Step 3 — Enable GitHub Pages
1. Go to **Settings** → **Pages** (left sidebar)
2. Under **Source** → select **Deploy from a branch**
3. Branch: `main` → Folder: `/ (root)` → click **Save**
4. Wait ~1 minute, then your site is live at:  
   👉 `https://YOUR-USERNAME.github.io`

---

## Option B: Install Git & Push via Command Line

### Step 1 — Install Git for Windows
Download from: [git-scm.com/download/win](https://git-scm.com/download/win)  
Run the installer with all defaults.

### Step 2 — Configure Git (run once)
Open **PowerShell** and run:
```powershell
git config --global user.name "Nikhilesh Padhi"
git config --global user.email "your@email.com"
```

### Step 3 — Initialize & Push
```powershell
cd "c:\Users\Nikhilesh\.gemini\antigravity\scratch"
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
git push -u origin main
```

### Step 4 — Enable GitHub Pages
Same as Option A Step 3 above.

---

## Custom Domain (Optional)

Once the site is live, add your domain:
1. **Settings** → **Pages** → **Custom domain** → enter `yourdomain.com` → Save
2. At your domain registrar (GoDaddy, Namecheap, etc.), add these **A records**:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
3. Add a **CNAME** for `www` → `YOUR-USERNAME.github.io`
4. Check **Enforce HTTPS** in GitHub Pages settings
5. Done — your site is live at your custom domain! 🎉

> DNS propagation can take up to 24 hours but usually works within 1-2 hours.
