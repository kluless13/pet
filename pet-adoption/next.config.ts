import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {},
  images: {
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;
