/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  // Temporairement désactiver le support PWA pour éviter le cache persistant
  // Si vous utilisez 'next-pwa', assurez-vous que 'disable' est mis à true.
  // Si vous n'utilisez pas de package, cette configuration suffit.
}

module.exports = nextConfig
