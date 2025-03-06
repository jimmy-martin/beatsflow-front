/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'zftucfqcjmqbkobajvbt.supabase.co',
      },
    ],
  },
}

module.exports = nextConfig
