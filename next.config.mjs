/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Add this to help with ES modules
  experimental: {
    esmExternals: 'loose'
  }
};

// Use ES module export
export default nextConfig;

// OR use CommonJS (pick one, not both)
// module.exports = nextConfig;
