import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @see https://nextjs.org/docs/architecture/nextjs-compiler
  compiler: {
    reactRemoveProperties: true,
    removeConsole: {
      exclude: ["error"],
    },
  },
  images: {
    remotePatterns: [
      {
        hostname: "image.yes24.com",
        pathname: "/goods/**",
      },
    ],
  },
};

export default nextConfig;
