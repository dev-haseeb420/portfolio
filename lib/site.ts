/**
 * Base path the app is served under (e.g. "/portfolio" for a GitHub Pages
 * project site at github.io/portfolio). Set at build time via
 * `NEXT_PUBLIC_BASE_PATH` so the same code also builds correctly at a
 * domain root (Vercel, a custom domain, etc). Must stay in sync with the
 * `basePath` in `next.config.ts`.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Canonical site URL used for metadata, sitemap and structured data. */
export const SITE_URL = "https://dev-haseeb420.github.io/portfolio";

export const SITE_NAME = "Muhammad Haseeb";

export const SITE_TITLE = "Muhammad Haseeb | Senior DevOps & Cloud Engineer";

export const SITE_DESCRIPTION =
  "Senior DevOps and Cloud Engineer specializing in AWS, Kubernetes, Terraform, CI/CD, Infrastructure as Code, automation, cloud security and platform engineering.";
