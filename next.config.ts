import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages configuration
  assetPrefix: process.env.NODE_ENV === "production" ? "/automera-systems" : "",
  basePath: process.env.NODE_ENV === "production" ? "/automera-systems" : "",
};

export default nextConfig;
