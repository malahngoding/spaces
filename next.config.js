/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'siasky.net'],
  },
  i18n: {
    locales: ['id', 'en'],
    defaultLocale: 'id',
    localeDetection: false,
  },
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
  async headers() {
    return [
      {
        source: '/.well-known/brave-rewards-verification.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
