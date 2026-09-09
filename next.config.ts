import type { NextConfig } from "next";

// Set at build time (see .github/workflows/deploy.yml) so the app can be
// served from a GitHub Pages project path like /portfolio while still
// building correctly at a domain root for other static hosts.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
};

export default nextConfig;
