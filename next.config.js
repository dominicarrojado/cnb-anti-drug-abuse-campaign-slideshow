/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  pageExtensions: ['page.tsx'],
  basePath: isProd ? '/cnb-anti-drug-abuse-campaign-slideshow' : '',
};

module.exports = nextConfig;
