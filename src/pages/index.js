import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import NavBar from "../components/NavBar/index"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allContentfulBlogPost.edges

    return (
      <div style={{ padding: 0, margin: 0, border: 0, backgroundColor:'#F4FAFF'}}>
        <NavBar />
        <Layout location={this.props.location} title={siteTitle}>
          <SEO title="All posts" />
          <Bio />
          {posts.map(({ node }) => {
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
                    dangerouslySetInnerHTML={{
                      __html: node.description.description
                    }}
                  />
                </section>
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
    allContentfulBlogPost(
      sort: {
        fields: date,
        order: DESC
      }
    ) {
      edges {
        node {
          title
          description{description}
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
