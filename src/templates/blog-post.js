import React from "react";
import { Link, graphql } from "gatsby";
import MarkDown from "markdown-to-jsx";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm, scale } from "../utils/typography";
import NavBar from "../components/NavBar";
import CommentSection from "../components/CommentsSection";
import "../utils/stylesheets/blogPost.scss";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulBlogPost;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <div className="blogpost-base-container">
        <NavBar />
        <Layout location={this.props.location} title={siteTitle}>
          <SEO title={post.title} description={post.description.description} />
          <article>
            <header>
              <h1 className="h1-header">{post.title}</h1>
              <p className="post-date">{post.date}</p>
            </header>
            <section className="markdown">
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
            <CommentSection />
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
    );
  }
}

export default BlogPostTemplate;

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
`;
