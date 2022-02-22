/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    reactRoot: true,
  },
  images: {
    domains: ['images.unsplash.com', 'siasky.net'],
  },
  i18n: {
    locales: ['id', 'en'],
    defaultLocale: 'id',
    localeDetection: false,
  },
};

module.exports = nextConfig;
