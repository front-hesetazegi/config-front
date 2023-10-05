/** @type {import('next').NextConfig} */

// import prismic from 'prismicio/client'
// import sm from './slicemachine.config.json'

const prismic = require("@prismicio/client");
const sm = require("./slicemachine.config.json");

const nextConfig = async () => {
  const client = prismic.createClient(sm.repositoryName);

  const repository = await client.getRepository();
  const locales = repository.languages.map((lang) => lang.id);


  return {
    i18n: {
      locales,
      defaultLocale: locales[0],
    },
    reactStrictMode: true,
    async redirects() {
      return [
        {
          source: '/',
          destination: '/en-us',
          permanent: false,
          has: [
            {
              type: 'header',
              key: 'accept-language',
              value: '(?!en-us).*', // Redirect if language is not en-us
            },
          ],
        },
      ];
    },
  };
};

module.exports = nextConfig;