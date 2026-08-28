import type { NextConfig } from "next";

/**
 * When GITHUB_PAGES=true (set by the Pages deploy workflow), build a fully
 * static export served from the `/plainmarket` sub-path. A normal build and
 * Vercel deploys are unaffected.
 */
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = isGithubPages
  ? {
      output: "export",
      basePath: "/plainmarket",
      trailingSlash: true,
      images: { unoptimized: true },
    }
  : {};

export default nextConfig;
