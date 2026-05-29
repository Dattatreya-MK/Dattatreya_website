# Dattatreya M K — Portfolio Website

Personal portfolio website built with **Next.js 14 + TypeScript + Tailwind CSS**.

## 🚀 Quick Deploy

### Option 1: Vercel (Recommended — 1 click)
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import `Dattatreya-MK/dattatreya_website`
3. Click Deploy — live in 60 seconds ✅

### Option 2: GitHub Pages
Add this file as `.github/workflows/deploy.yml` — see below.

## 🛠️ Local Development
```bash
npm install
npm run dev
# Open http://localhost:3000
```

## 🏗️ Build
```bash
npm run build   # outputs to /out folder (static export)
```

## 📁 Structure
```
├── app/
│   ├── globals.css      # All styles + animations
│   ├── layout.tsx       # SEO metadata
│   └── page.tsx         # Main page
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Education.tsx
│   ├── Certifications.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── FadeIn.tsx       # Scroll animation wrapper
│   └── SectionHeader.tsx
```
