import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2xsxph8kpxj0f.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "img.restaurantjun.com",
      },
      {
        protocol: "https",
        hostname: "tb-static.uber.com",
      },
      {
        protocol: "https",
        hostname: "sushijungle.com",
      },
    ],
  },
};

export default nextConfig;
