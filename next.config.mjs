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
};

export default nextConfig;
