/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.pexels.com',"static.zara.net","image.brandi.me"],
    loader: 'default',
  },
};

module.exports = nextConfig;
