# Aditya Sridhar — Portfolio

Personal developer portfolio showcasing projects, skills, and experience.

🔗 **Live:** [aditya-sridhar-portfolio.vercel.app](https://aditya-sridhar-portfolio.vercel.app)

---

## Tech Stack

- **Framework:** Next.js 13 (Pages Router), React 18, TypeScript
- **Styling:** Tailwind CSS + CSS custom properties (light/dark theme)
- **Animations:** Framer Motion
- **Contact:** Nodemailer (API route)
- **Package Manager:** pnpm

## Quick Start

```bash
pnpm install
cp .env.example .env   # then fill in values
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env` file (never commit it):

```
NODEMAILER_USER=you@gmail.com
NODEMAILER_PASS=your_google_app_password
```

> To get a Google App Password: enable 2-Step Verification → search "App passwords" → create one named `portfolio-nodemailer`.

## Customization

| What                | Where                          |
| ------------------- | ------------------------------ |
| Projects & skills   | `src/data/`                    |
| SEO & site metadata | `src/data/siteMetaData.mjs`    |
| Theme colors        | `src/styles/globals.css`       |
| Profile photo       | `public/images/profile.webp`   |
| Project screenshots | `public/images/projects/`      |

## Resume

📄 [View Resume (Google Drive)](https://drive.google.com/file/d/19oWSfeielzVApqE094LbzLFmvuj5e0uc/view?usp=drive_link)

## Deployment

The site auto-deploys to **Vercel** on every push to `main`.

| Setting         | Value          |
| --------------- | -------------- |
| Framework       | Next.js        |
| Build command   | `pnpm build`   |
| Install command | `pnpm install` |

## License

MIT
