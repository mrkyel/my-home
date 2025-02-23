import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [96, 256, 384, 512],
    imageSizes: [64, 96, 128, 256],
  },
};

export default nextConfig;
