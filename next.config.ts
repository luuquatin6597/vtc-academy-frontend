import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
};

module.exports = {
  images: {
    domains: ['photo-resize-zmp3.zmdcdn.me', 'cdn.auth0.com'],
  },
};

export default nextConfig;
