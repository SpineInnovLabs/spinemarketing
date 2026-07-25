/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    // `output: 'export'` produces a fully static site with no server to run the
    // default image-optimization loader, so images MUST be served unoptimized.
    // (With `unoptimized: false` the build fails / hangs on any `next/image` usage.)
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  allowedDevOrigins: ["*.replit.dev", "*.worf.replit.dev"],
}

export default nextConfig
