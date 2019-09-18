import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import NavBar from "../components/NavBar"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
// import * as MarkDown from "react-markdown"
import MarkDown from "markdown-to-jsx"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulBlogPost
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    const richTextOptions = {
      renderNode: {
        "embedded-asset-block": node => {
          const alt = node.data.target.fields.title["en-US"]
          const url = node.data.target.fields.file["en-US"].url
          return <img alt={alt} src={url} />
        },
      },
      renderText: text => {
        return <MarkDown children={text} />
      },
    }

    const markdown = documentToReactComponents(post.body.json, richTextOptions)

    return (
      <div
        style={{ padding: 0, margin: 0, border: 0, backgroundColor: "#F4FAFF" }}
      >
        <NavBar />
        <Layout location={this.props.location} title={siteTitle}>
          <SEO title={post.title} description={post.description.description} />
          <article>
            <header>
              <h1
                style={{
                  marginTop: rhythm(1),
                  marginBottom: 0,
                }}
              >
                {post.title}
              </h1>
              <p
                style={{
                  ...scale(-1 / 5),
                  display: `block`,
                  marginBottom: rhythm(1),
                }}
              >
                {post.date}
              </p>
            </header>
            <section>{markdown}</section>
            <hr
              style={{
                marginBottom: rhythm(1),
              }}
            />
            <footer>
              <Bio />
            </footer>
          </article>

          <nav>
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.slug} rel="prev">
                    ← {previous.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.slug} rel="next">
                    {next.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </Layout>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      title
      date(formatString: "MMMM DD, YYYY")
      description {
        description
      }
      body {
        json
        content {
          content {
            value
          }
        }
      }
    }
  }
`
