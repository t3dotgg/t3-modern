/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,

    // Because I can
    runtime: "experimental-edge",
  },
};

module.exports = nextConfig;
