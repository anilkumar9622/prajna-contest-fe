/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
     images: {
    domains: ["localhost","kooqxit.com"], // 👈 add your external image host here
  },
};

module.exports = nextConfig;
