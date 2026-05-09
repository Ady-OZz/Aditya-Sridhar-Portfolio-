# Deployment Guide

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit - Aditya Sridhar Portfolio"
git remote add origin https://github.com/Ady-OZz/Aditya-Sridhar-Portfolio-.git
git push -u origin main
```

If the repo already has files on GitHub, use this instead to avoid conflicts:

```bash
git push -u origin main --force
```

### Step 2: Deploy on Vercel

- Go to https://vercel.com/new
- Import Ady-OZz/Aditya-Sridhar-Portfolio-
- Framework: Next.js (auto-detected)
- Build command: pnpm build
- Install command: pnpm install
- Add environment variables before deploy:
	- NODEMAILER_USER = adityyasridharofficial@gmail.com
	- NODEMAILER_PASS = your Google App Password (see Step 4)

### Step 3: After Deploy

- Copy your live Vercel URL -> paste into siteUrl in src/data/siteMetaData.mjs
- Drop your profile photo at public/images/profile.webp
- Replace SVG project placeholders in public/images/projects/ with real screenshots

### Step 4: Get Google App Password

1. Go to myaccount.google.com
2. Security -> 2-Step Verification (must be ON)
3. Search "App passwords" at the top
4. Create app named "portfolio-nodemailer"
5. Copy the 16-character password -> paste as NODEMAILER_PASS

### Step 5: Google Search Console

- Go to https://search.google.com/search-console/welcome
- Add property -> URL prefix -> enter your Vercel URL
- Choose HTML tag verification method
- Copy the content="XXXXX" value
- Paste into googleSiteVerification in src/data/siteMetaData.mjs
- Redeploy, then click Verify
