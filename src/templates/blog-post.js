import React from "react";
import { Link, graphql } from "gatsby";
import MarkDown from "markdown-to-jsx";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";
import NavBar from "../components/NavBar";
import "../utils/stylesheets/blogPost.scss";
import Share from "../components/ShareBar";
// import { Twitter, Facebook } from "@material-ui/icons";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulBlogPost;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;
    const markdown = post.body.childMarkdownRemark.html;

    const html2 = markdown.replace(/<p>/gm, `<p id="reg-paragraph">`);
    const html = html2.replace(
      /<p id="reg-paragraph"><img/gm,
      `<p id="image-paragraph"><img`
    );
    return (
      <div className="blogpost-base-container">
        <NavBar />
        <Layout location={this.props.location} title={siteTitle}>
          <SEO title={post.title} description={post.description.description} />
          <article>
            <header>
              <h1 className="h1-header">{post.title}</h1>
              <div className="small-header">
                <p className="post-date">
                  {post.date} <Share slug={post.slug} />
                </p>
              </div>
            </header>
            <section className="markdown">
              <MarkDown children={html} />
            </section>
            <hr
              style={{
                marginBottom: rhythm(1),
              }}
            />
            <Share />
            <footer className="footer">
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
      slug
      date(formatString: "MMMM DD, YYYY")
      description {
        description
      }
      body {
        body
        childMarkdownRemark {
          htmlAst
          html
        }
      }
    }
  }
`;
