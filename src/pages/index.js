import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import NavBar from "../components/NavBar/index"
import SplashImage from "../components/SplashImage"

import "../utils/stylesheets/mainStyle.scss"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allContentfulBlogPost.edges

    return (
      <div
        style={{ padding: 0, margin: 0, border: 0, backgroundColor: "#FFF" }}
      >
        <NavBar />
        <SplashImage />
        <Layout location={this.props.location} title={siteTitle}>
          <SEO title="All posts" />
          {/* <Bio /> */}
          {posts
            // .filter(({node}) =>
            //   node.category.includes(this.state.categoryName)
            // )
            .map(({ node }) => {
              const title = node.title || node.slug
              return (
                <article
                  key={node.slug}
                  style={{
                    display: `flex`,
                    flexDirection: `column`,
                    alignItems: `center`,
                  }}
                >
                  {/* <div style={{ paddingTop: `10%`, paddingBottom: `10%` }}>
                    <h1 style={{ fontSize: `70px` }}>Articles</h1>
                  </div> */}
                  <div>
                    {/* <p style={{ padding: 0 }}>{node.category}</p> */}
                    <header style={{ marginTop: 0, marginBottom: `10px` }}>
                      <h1
                        style={{
                          marginBottom: rhythm(1 / 4),
                          fontSize: `38px`,
                          fontWeight: `bold`,
                          fontFamily: "Merriweather",
                        }}
                      >
                        <Link
                          style={{ boxShadow: `none`, color: `black` }}
                          to={node.slug}
                        >
                          {title}
                        </Link>
                      </h1>
                      <small>{node.date}</small>
                    </header>
                    <section>
                      <p
                        style={{
                          color: "rgba(112, 119, 133,1)",
                          lineHeight: "2.3",
                          fontFamily: `Merriweather`,
                        }}
                        dangerouslySetInnerHTML={{
                          __html: node.description.description,
                        }}
                      />
                    </section>
                  </div>
                </article>
              )
            })}
        </Layout>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: date, order: DESC }) {
      edges {
        node {
          title
          description {
            description
          }
          slug
          date(formatString: "MMMM DD, YYYY")
          category
          indexPhoto {
            description
            fixed {
              src
            }
            file {
              url
            }
          }
        }
      }
    }
  }
`
