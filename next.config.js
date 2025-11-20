const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },

  // Enable "@/..." imports
  webpack(config) {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },

  // Allow external images (Booking, Expedia, Google, Jamaica Tourism, etc)
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.booking.com" },
      { protocol: "https", hostname: "**.expedia.com" },
      { protocol: "https", hostname: "**.airbnb.com" },
      { protocol: "https", hostname: "**.googleusercontent.com" },
      { protocol: "https", hostname: "**.visitjamaica.com" },
      { protocol: "https", hostname: "**.ytimg.com" },
      { protocol: "https", hostname: "**.unsplash.com" },
    ],
  },

  // Required for TON blockchain clients using fetch, crypto, buffers, etc
  env: {
    TON_API_KEY: process.env.TON_API_KEY || "",
  },
};

module.exports = nextConfig;
