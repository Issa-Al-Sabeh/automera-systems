import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages configuration
  basePath: process.env.NODE_ENV === "production" ? "/automera-systems" : "",
  // Ensure CSS paths are handled correctly
  assetPrefix: process.env.NODE_ENV === "production" ? "/automera-systems" : "",
};

export default nextConfig;
