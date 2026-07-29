import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-expect-error: New feature in Next.js 15+ not yet in types
  allowedDevOrigins: ['192.168.1.33'],
  experimental: {
    serverActions: {
      bodySizeLimit: '5mb',
    },
  },
};

export default nextConfig;
