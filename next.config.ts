import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.110.15"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.daisyui.com",
      },
    ],
  },
};

export default nextConfig;
