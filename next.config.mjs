/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["*.replit.dev", "*.worf.replit.dev"],
  async rewrites() {
    return [
      {
        source: '/__mockup/:path*',
        destination: 'http://localhost:23636/__mockup/:path*',
      },
    ];
  },
}

export default nextConfig
