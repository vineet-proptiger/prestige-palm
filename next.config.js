/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    if (dev) config.cache = false
    return config
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/palm-court-new-launch',
        permanent: false,
      },
    ]
  },
}
module.exports = nextConfig
