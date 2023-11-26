/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_SERVICE_ID: string = process.env.NEXT_PUBLIC_SERVICE_ID,
    NEXT_PUBLIC_TEMPLATE_ID: string = process.env.NEXT_PUBLIC_TEMPLATE_ID,
    NEXT_PUBLIC_PUBLIC_KEY: string = process.env.NEXT_PUBLIC_PUBLIC_KEY
  }
}

module.exports = nextConfig
