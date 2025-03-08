// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/api/random/:path*",
        destination: "https://www.randomnumberapi.com/:path*",
      },
    ];
  },
  compiler: {
    reactRemoveProperties: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
