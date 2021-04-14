require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Totem Notes`,
    // TODO: Add description
    description: `Totem Notes description`,
    author: `Totem Shop`,
  },
  plugins: [
    `custom-mui-theme`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-stripe`,
    `gatsby-plugin-playground`,
    {
      resolve: `gatsby-plugin-material-ui`,
      // TODO: Remove when not using styled components
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-react-redux`,
      options: {
        // [required] - path to your createStore module
        pathToCreateStoreModule: "./src/state/createStore",
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-source-firebase`,
    //   options: {
    //     // point to the firebase private key downloaded
    //     credential: {
    //       type: process.env.FIREBASE_ACCESS_type,
    //       project_id: process.env.FIREBASE_ACCESS_project_id,
    //       private_key_id: process.env.FIREBASE_ACCESS_private_key_id,
    //       private_key: process.env.FIREBASE_ACCESS_private_key.replace(
    //         /\\n/gm,
    //         "\n"
    //       ),
    //       client_email: process.env.FIREBASE_ACCESS_client_email,
    //       client_id: process.env.FIREBASE_ACCESS_client_id,
    //       auth_uri: process.env.FIREBASE_ACCESS_auth_uri,
    //       token_uri: process.env.FIREBASE_ACCESS_token_uri,
    //       auth_provider_x509_cert_url:
    //         process.env.FIREBASE_ACCESS_auth_provider_x509_cert_url,
    //       client_x509_cert_url:
    //         process.env.FIREBASE_ACCESS_client_x509_cert_url,
    //     },
    //     // "./sena-totem-firebase-adminsdk-jqsci-2e9a906307.json",
    //     // your firebase database root url
    //     databaseURL: "https://sena-totem.firebaseio.com/",
    //     // you can have multiple "types" that point to different paths
    //     types: [
    //       {
    //         // this type will become `allWorkshop` in graphql
    //         type: "shopComplects",
    //         // the path to get the records from
    //         path: "/",
    //       },
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["PT Sans:400,700", "Raleway:400,600,800"],
        display: "swap",
      },
    },
  ],
}
