import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import NavBar from "../components/NavBar/index"
import SplashImage from "../components/BackgroundImage"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allContentfulBlogPost.edges

    return (
      <div
        style={{ padding: 0, margin: 0, border: 0, backgroundColor: "#FFF" }}
      >
        {/* <NavBar /> */}
        <SplashImage />
        {/* <Layout location={this.props.location} title={siteTitle}>
          <SEO title="All posts" />
          <Bio />
          {posts
            // .filter(({node}) =>
            //   node.category.includes(this.state.categoryName)
            // )
            .map(({ node }) => {
              const title = node.title || node.slug
              return (
                <article key={node.slug}>
                  <header>
                    <h3
                      style={{
                        marginBottom: rhythm(1 / 4),
                      }}
                    >
                      <Link style={{ boxShadow: `none` }} to={node.slug}>
                        {title}
                      </Link>
                    </h3>
                    <small>{node.date}</small>
                  </header>
                  <section>
                    <p
                      style={{ color: "#7d7d7d", lineHeight: "1.4" }}
                      dangerouslySetInnerHTML={{
                        __html: node.description.description,
                      }}
                    />
                  </section>
                </article>
              )
            })}
        </Layout> */}
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
