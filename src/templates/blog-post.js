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
import CommentSection from "../components/CommentsSection"
import IsScrolling from "react-is-scrolling"

class BlogPostTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      progress: 0,
    }
  }

  IncrementProgress = () => {
    this.setState({
      progress: this.state.progress + 10,
    })
  }
  DecrementProgress = () => {
    this.setState({
      progress: this.state.progress - 10,
    })
  }

  handleProgressBar = () => {
    if (true) {
      console.log(this.props.IsScrolling)
    }
  }

  render() {
    const post = this.props.data.contentfulBlogPost
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const { IsScrollingDown, IsScrollingUp, IsScrolling } = this.props

    return (
      <div
        // onWheel={() => this.handleProgressBar()}
        style={{ padding: 0, margin: 0, border: 0, backgroundColor: "#FFF" }}
      >
        <NavBar progress={this.state.progress} />
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
            <section>
              <MarkDown children={post.body.body} />
            </section>
            <hr
              style={{
                marginBottom: rhythm(1),
              }}
            />
            <footer>
              <Bio />
            </footer>
            {/* <CommentSection /> */}
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
            <ul style={{ listStyle: "none" }}>
              <li>
                <Link to="/">← Home</Link>
              </li>
            </ul>
          </nav>
        </Layout>
      </div>
    )
  }
}

export default IsScrolling(BlogPostTemplate)

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
        body
      }
    }
  }
`
