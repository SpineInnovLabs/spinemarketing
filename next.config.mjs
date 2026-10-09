/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";
import { tsImport } from "tsx/esm/api";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// Resolve YAML and runtime flags on the server, before creating browser bundles.
const { loadPublicSitesConfig } = await tsImport(
  "./lib/public-sites-config.ts",
  import.meta.url,
);
const { resolvedPublicSites } = await tsImport(
  "./lib/resolve-public-site-urls.ts",
  import.meta.url,
);
const publicSites = resolvedPublicSites(loadPublicSitesConfig());

const nextConfig = {
  output: "export",
  env: {
    SPINE_PUBLIC_SITES_JSON: JSON.stringify(publicSites),
  },
  outputFileTracingRoot: __dirname,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  allowedDevOrigins: ["*.replit.dev", "*.worf.replit.dev"],
};

export default nextConfig;
