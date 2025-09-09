/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SES_REGION: process.env.SES_REGION,
    SES_FROM_EMAIL: process.env.SES_FROM_EMAIL,
    SES_TO_EMAIL: process.env.SES_TO_EMAIL,
    SES_FROM: process.env.SES_FROM,
    SES_TO: process.env.SES_TO,
    SES_ACCESS_KEY_ID: process.env.SES_ACCESS_KEY_ID,
    SES_SECRET_ACCESS_KEY: process.env.SES_SECRET_ACCESS_KEY,
  },
  experimental: {
    serverComponentsExternalPackages: ['@aws-sdk/client-ses'],
  },
}

module.exports = nextConfig
