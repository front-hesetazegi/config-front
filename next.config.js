const nextConfig = async () => {
  return {
    reactStrictMode: true,
    async redirects() {
      return [
        {
          source: "/",
          destination: "/en-us",
          permanent: false,
          has: [
            {
              type: "header",
              key: "accept-language",
              value: "(?!en-us).*", // Redirect if language is not en-us
            },
          ],
        },
      ];
    },
  };
};

module.exports = nextConfig;
