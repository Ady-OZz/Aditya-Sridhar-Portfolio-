# Aditya Sridhar Portfolio

Personal developer portfolio built with Next.js (Pages Router) and Tailwind CSS.

## Tech Stack

- Next.js, React, TypeScript
- Tailwind CSS + CSS variables
- Framer Motion
- Nodemailer (API route)
- pnpm

## Quick Start

```bash
pnpm install
cp .env.example .env
pnpm dev
```

Open <http://localhost:3000>.

## Environment Variables

Set these in `.env` (never commit it):

```
NODEMAILER_USER=you@gmail.com
NODEMAILER_PASS=your_google_app_password
```

## Customization

- Update copy and data in `src/data/` (projects, skills, experience, education)
- Update SEO fields in `src/data/siteMetaData.mjs`
- Update theme tokens in `src/styles/globals.css`

## Assets

- Profile photo: `public/images/profile.webp`
- Project images: `public/images/projects/`
- Resume: `public/resume.pdf`

## Nodemailer Setup

1. Enable 2-step verification in your Google account.
2. Create a Google App Password.
3. Use it for `NODEMAILER_PASS`.

## Sitemap and SEO

- Generate sitemap and robots.txt: `pnpm sitemap`
- Add Google Search Console verification to `src/data/siteMetaData.mjs`
- Update `siteUrl` after deployment
