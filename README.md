# Muhammad Haseeb — Portfolio

A single-page, production-quality portfolio for Muhammad Haseeb, a Senior DevOps / Cloud & Platform
Engineer. Built with the Next.js App Router and styled for a calm, technical, infrastructure-oriented
feel with full light/dark theme support.

## Overview

The site presents a single scrollable page covering:

- Hero with an animated infrastructure/topology visual
- Professional summary
- Core expertise keyword band
- Experience timeline
- Categorized technology skills matrix
- Engineering capability cards
- Education
- A closing contact call-to-action (email + LinkedIn — no contact form)

All profile content lives in one typed data file, so the page can be updated without touching markup.

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/) (strict mode)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Motion for React](https://motion.dev/) (`motion/react`) for animation
- [Lucide React](https://lucide.dev/) for icons
- `next/font` for self-hosted, zero-layout-shift fonts
- ESLint + Prettier (with `prettier-plugin-tailwindcss`)

## Getting Started

Requires Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production build

```bash
npm run build
npm run start
```

### Linting & formatting

```bash
npm run lint
npm run format        # writes formatting fixes
npm run format:check  # checks formatting only
```

## Project Structure

```
app/
  layout.tsx        Root layout: fonts, metadata, JSON-LD, theme bootstrap
  page.tsx           Assembles all sections for the single page
  globals.css        Design tokens (light/dark), base styles, utilities
  icon.tsx           Generated favicon (initials mark)
  opengraph-image.tsx Generated Open Graph share image
  robots.ts          robots.txt
  sitemap.ts         sitemap.xml
components/
  navbar.tsx         Sticky floating navbar with mobile menu
  footer.tsx
  hero-visual.tsx    Animated infrastructure topology graphic
  theme-toggle.tsx   Light/dark theme switch
  theme-script.tsx   No-flash theme bootstrap script
  sections/          One component per page section
  ui/                Reusable primitives (Button, Badge, Container, Reveal, ...)
data/
  portfolio.ts       All portfolio content (profile, experience, skills, etc.)
lib/
  site.ts            Site-wide metadata constants
  utils.ts           Small shared helpers
public/
  resume/            Downloadable resume PDF
```

## Changing Portfolio Data

Nearly all text content — name, headline, summary, experience, skills, education, links — lives in
[`data/portfolio.ts`](./data/portfolio.ts). Edit the exported objects/arrays there; the page
components render directly from this data, so no other files need to change for content updates.

Site-wide SEO constants (title, description, canonical URL) live in [`lib/site.ts`](./lib/site.ts).
Update `SITE_URL` there once the site has a real domain — it feeds `metadataBase`, the sitemap, and
`robots.txt`.

## Changing the Resume

1. Replace the file at `public/resume/muhammad-haseeb-resume.pdf` with the updated PDF (keep the same
   filename, or update the path).
2. If you change the filename, update `profile.resumeHref` and `profile.resumeFileName` in
   `data/portfolio.ts` — `resumeFileName` controls the filename used when a visitor downloads it.

## Deployment (Vercel)

1. Push the repository to GitHub (or another Git provider).
2. Import the project into [Vercel](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected). No extra environment variables are required.
4. Update `SITE_URL` in `lib/site.ts` to match the deployed domain before shipping, so metadata,
   the sitemap and the Open Graph image resolve correctly.
5. Deploy — Vercel builds with `npm run build` and serves the app automatically.
