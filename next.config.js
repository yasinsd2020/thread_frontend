/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.pexels.com',"static.zara.net","image.brandi.me","seoulish.kr","d1flfk77wl2xk4.cloudfront.net","jogunshop.img18.kr"],
    loader: 'default',
  },
};

module.exports = nextConfig;
