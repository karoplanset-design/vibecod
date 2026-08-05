import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sites serves the bundled public assets directly. Disabling the runtime
  // optimizer keeps local WebP files available in the deployed worker.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
