/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.lingoapp.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
