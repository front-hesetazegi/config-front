/** @type {import('next').NextConfig} */
const prismic = require("@prismicio/client");
const sm = require("./slicemachine.config.json");

const nextConfig = async () => {
  return {
    reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
    swcMinify: true,

    experimental: {
      turbo: {},
      serverActions: true,
    },
    eslint: {
      // Disabling on production builds because we're running checks on PRs via GitHub Actions.
      ignoreDuringBuilds: true,
    },
  };
};
module.exports = nextConfig;
