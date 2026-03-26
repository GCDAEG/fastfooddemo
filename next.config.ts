import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images:{
    remotePatterns: [
      new URL('https://i.pravatar.cc/*'),
      new URL('https://images.pexels.com/**'),
      new URL('https://images.unsplash.com/*'),
    ],
  }
};

export default nextConfig;
