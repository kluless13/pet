import type { NextConfig } from "next";

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: false as any,
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias['@vercel/turbopack-next/internal/font/google/font'] = false;
    return config;
  },
  optimizeFonts: false
} as NextConfig;

module.exports = nextConfig;
