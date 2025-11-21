/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Add basePath if your repo name isn't your GitHub username
  // basePath: '/Personal-Portfolio', // Replace with your actual repo name
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Personal-Portfolio' : '',
};

module.exports = nextConfig;