/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["https://res.cloudinary.com", "res.cloudinary.com"],
  },
  env: {
    // NODE_ENV: "development",
    PRODUCTION_BACKEND_URL: "https://mern-social-media-backend1.onrender.com",
    DEVELOPMENT_BACKEND_URL: "http://localhost:5000",
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
