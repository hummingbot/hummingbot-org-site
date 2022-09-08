require("dotenv").config()
const {
  NODE_ENV,
  // CONTENTFUL_SPACE_ID,
  // CONTENTFUL_ACCESS_TOKEN,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
  // GOOGLE_TAG_MANAGER_ID = "GTM-W3556WN",
  // GATSBY_AMPLITUDE_ID,
} = process.env

const siteUrl = `https://hummingbot.org`

module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `Hummingbot`,
    description: `Hummingbot is open source software that helps you run market making and arbitrage trading bots on any crypto centralized and decentralized exchange`,
    secondaryDescription: `Build and run your own market making and arbitrage bots with Hummingbot`,
    locale: "en",
    author: `Hummingbot Foundation`,
    siteUrl: siteUrl,
    githubUrl: `https://github.com/hummingbot/hummingbot`,
    discordUrl: `https://discord.gg/hummingbot`,
  },
  plugins: [
    `gatsby-plugin-remove-fingerprints`,
    // `gatsby-plugin-image`,
    // `gatsby-plugin-use-query-params`,
    // {
    //   resolve: `gatsby-plugin-sharp`,
    //   options: {
    //     defaults: {
    //       formats: [`auto`, `webp`],
    //       placeholder: `blurred`,
    //       quality: 80,
    //       breakpoints: [750, 1080, 1366, 1920],
    //       backgroundColor: `transparent`,
    //     },
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: CONTENTFUL_SPACE_ID,
    //     accessToken: CONTENTFUL_ACCESS_TOKEN,
    //     // host: `preview.contentful.com`,
    //     forceFullSync: false,
    //     downloadLocal: false,
    //     pageLimit: 500,
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-amplitude",
    //   options: {
    //     apiKey: GATSBY_AMPLITUDE_ID,
    //     enableOnDevMode: true,
    //   },
    // },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
    // {
    //   resolve: `gatsby-plugin-algolia`,
    //   options: {
    //     appId: process.env.GATSBY_ALGOLIA_APP_ID,
    //     apiKey: process.env.ALGOLIA_ADMIN_KEY,
    //     queries: require("./src/utils/algolia-queries"),
    //   },
    // },
{
       resolve: 'gatsby-plugin-manifest',
       options: {
    //     name: `CoinAlpha, Inc.`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
           icon: './src/svgs/favicon.png',
       },
     },
  ],
}
