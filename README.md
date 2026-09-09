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
  opengraph-image.tsx Generated Open Graph share image
  robots.ts          robots.txt
  sitemap.ts         sitemap.xml
components/
  navbar.tsx         Sticky floating navbar with mobile menu
  footer.tsx
  hero-visual.tsx    Animated infrastructure topology graphic
  theme-toggle.tsx   Light/dark theme switch
  icons/             Small custom icons not covered by lucide-react
  sections/          One component per page section
  ui/                Reusable primitives (Button, Badge, Container, Reveal, ...)
data/
  portfolio.ts       All portfolio content (profile, experience, skills, etc.)
lib/
  site.ts            Site-wide metadata constants (SITE_URL, BASE_PATH, ...)
  theme-init-script.ts  No-flash theme bootstrap script, run via next/script
  utils.ts           Small shared helpers
public/
  resume/            Downloadable resume PDF
  icon.svg           Favicon (initials mark)
.github/workflows/
  deploy.yml         Builds the static export and deploys it to GitHub Pages
```

## Changing Portfolio Data

Nearly all text content — name, headline, summary, experience, skills, education, links — lives in
[`data/portfolio.ts`](./data/portfolio.ts). Edit the exported objects/arrays there; the page
components render directly from this data, so no other files need to change for content updates.

Site-wide SEO constants (title, description, canonical URL) live in [`lib/site.ts`](./lib/site.ts).
Update `SITE_URL` there if the site moves to a different domain or repository — it feeds
`metadataBase`, the sitemap, `robots.txt` and the Open Graph image.

## Changing the Resume

1. Replace the file at `public/resume/muhammad-haseeb-resume.pdf` with the updated PDF (keep the same
   filename, or update the path).
2. If you change the filename, update `profile.resumeHref` and `profile.resumeFileName` in
   `data/portfolio.ts` — `resumeFileName` controls the filename used when a visitor downloads it.

## Deployment

The app builds as a fully static export (`output: "export"` in `next.config.ts`) — no server
runtime is required, so it can be hosted on GitHub Pages, Vercel, Netlify, S3, or any static host.

### GitHub Pages (current setup)

The site is deployed automatically to GitHub Pages via
[`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml):

1. Every push to `main` builds the app with `next build` (producing the static export in `out/`)
   and publishes it with the official `actions/deploy-pages` action.
2. The workflow reads the project's Pages base path (e.g. `/portfolio`) via
   `actions/configure-pages` and passes it in as `NEXT_PUBLIC_BASE_PATH`, which `next.config.ts`
   and `lib/site.ts` use to prefix internal asset links (`basePath`) correctly.
3. In the repository settings, **Settings → Pages → Build and deployment → Source** must be set to
   **GitHub Actions** (done once when the repo is created).
4. Live URL: **https://dev-haseeb420.github.io/portfolio/**

If the repository is ever renamed or moved to a different account, update `SITE_URL` in
`lib/site.ts` to match the new URL.

### Building a GitHub Pages export locally

```bash
NEXT_PUBLIC_BASE_PATH=/portfolio npm run build
```

This writes the static site to `out/`. `public/.nojekyll` is copied into `out/` automatically so
GitHub Pages serves the `_next/` asset folder instead of ignoring it.

### Deploying elsewhere (e.g. Vercel, a custom domain)

1. Build without `NEXT_PUBLIC_BASE_PATH` (or leave it unset) so the app is rooted at `/`:
   ```bash
   npm run build
   ```
2. Update `SITE_URL` in `lib/site.ts` to match the new domain.
3. Serve the contents of `out/` as a static site (Vercel and Netlify both auto-detect a Next.js
   static export; for any other static host, upload `out/` directly).
