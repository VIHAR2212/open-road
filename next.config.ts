import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  experimental: {
    turbo: undefined,
  },
  turbopack: false,
};

export default nextConfig;
