// @ts-check

import { readFileSync } from "fs";
import { join } from "path";

const packageJson = JSON.parse(
  readFileSync(join(process.cwd(), "package.json"), "utf8"),
);

/** @type {import('next').NextConfig} */
const nextConfig = {
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
  assetPrefix: `/${packageJson.name}`,
};

export default nextConfig;
