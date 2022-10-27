/*
 */
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'siasky.net',
      'kusama.network',
      'avatars.dicebear.com',
    ],
  },
  i18n: {
    locales: ['id', 'en'],
    defaultLocale: 'id',
    localeDetection: false,
  },
  compiler: {
    removeConsole: false,
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

export default withVanillaExtract(nextConfig);