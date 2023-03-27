/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  env: {
    MONGODB_URI: 'mongodb+srv://anonymous_notes:PpE9yStyoqGpMMfv@todo.axhmmzb.mongodb.net/?retryWrites=true&w=majority',
  },
}

module.exports = nextConfig
