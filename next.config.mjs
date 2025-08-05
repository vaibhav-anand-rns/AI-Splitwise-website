/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  // Add this if Clerk suggests adding headers (not always needed in latest SDK)
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         {
  //           key: "x-clerk",
  //           value: "edge",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
