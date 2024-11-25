/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'css')],
  },
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
};

module.exports = nextConfig;
