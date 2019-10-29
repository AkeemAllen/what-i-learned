module.exports = {
  siteMetadata: {
    title: `What I Learned`,
    author: `Akeem Allen`,
    description: `A knowledge archive container all that I have learned`,
    siteUrl: `https://www.whatilearnedarchives.com/`,
    social: {
      twitter: `Akstar39306982`,
    },
  },
  plugins: [
    {
      //Pull content information from the
      //contentful web service
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      //Acquires assets from the root folder
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      //Creates an rss feed that can
      //notify users of new content
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allContentfulBlogPost } }) => {
              return allContentfulBlogPost.edges.map(edge => {
                return Object.assign({}, edge.node, {
                  description: edge.node.description.description,
                  date: edge.node.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [
                    {
                      "content:encoded":
                        edge.node.body.childMarkdownRemark.html,
                    },
                  ],
                });
              });
            },
            query: `{
              allContentfulBlogPost(
                sort: {
                  fields: date,
                  order: DESC
                }
              ) {
                edges {
                  node {
                    fields{
                      slug
                    }
                    description{description}
                    date(formatString: "MMMM DD, YYYY")
                    body {
                      childMarkdownRemark{
                        html
                      }
                    }
                  }
                }
              }
            }`,
            output: "/rss.xml",
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.ANALYTICS_TRACKING_ID,
      },
    },
    {
      //Makes it so that the site can be
      //added as a PWA to a mobile homescreen
      //or desktop
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `What I Learned Archives`,
        short_name: `whatilearned`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/book-solid.svg`,
      },
    },
    //Adds drop-in support for making a Gatsby site work
    //offline and more resistant to bad network connections
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    //Provides drop-in support for SASS/SCSS stylesheets
    `gatsby-plugin-sass`,
    {
      //plugin for utilizing the Typography library with minimal configuration.
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
