// Bundle Analysis
// To analyze your bundle, set ANALYZE=true and run: ANALYZE=true pnpm build
// Requires: npm install --save-dev @next/bundle-analyzer
const withBundleAnalyzer =
  process.env.ANALYZE === 'true'
    ? require('@next/bundle-analyzer')({ enabled: true })
    : (x) => x

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  allowedDevOrigins: ["*.replit.dev", "*.worf.replit.dev"],
  webpack: (config, { isServer }) => {
    config.optimization.minimize = true
    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          filename: `static/chunks/vendor.js`,
          test: /node_modules/,
          name: 'vendor',
          priority: 10,
          reuseExistingChunk: true,
          enforce: true,
        },
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'react-vendor',
          priority: 20,
          reuseExistingChunk: true,
          enforce: true,
        },
        animation: {
          test: /[\\/]node_modules[\\/](framer-motion)[\\/]/,
          name: 'animation-vendor',
          priority: 15,
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    }
    return config
  },
}

export default withBundleAnalyzer(nextConfig)
