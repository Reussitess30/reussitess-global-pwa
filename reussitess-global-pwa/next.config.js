/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // serverExternalPackages: ['@prisma/client'], // à activer seulement si besoin
};

module.exports = nextConfig;
