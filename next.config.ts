import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  publicRuntimeConfig: {
    NEXT_PUBLIC_EMAIL: process.env.NEXT_PUBLIC_EMAIL
  },
};

export default nextConfig;
