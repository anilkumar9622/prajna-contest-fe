/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true, // only if you’re actually using the App Router
  },
};

module.exports = nextConfig;

