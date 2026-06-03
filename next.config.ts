/** @type {import('next').NextConfig} */

const nextConfig = {

  images: {

    remotePatterns: [

      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],

    // 🔴 YEH ADD KARO — Fast image loading ke liye
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,

  },

  // 🔴 YEH ADD KARO — Vercel deployment ke liye
  output: 'standalone',
  trailingSlash: false,

};

module.exports = nextConfig;