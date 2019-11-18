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
import Share from "../components/ShareBar";
import { Twitter, Facebook } from "@material-ui/icons";
import JSsoup from "jssoup";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulBlogPost;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;
    const markdown = post.body.childMarkdownRemark.html;

    const testMarkdown = post.body.childMarkdownRemark.htmlAst;

    let html = [];

    testMarkdown.children.forEach(element => {
      if (element.tagName != undefined) {
        if (element.children[0].tagName === "img") {
          html.push(
            React.createElement(element.children[0].tagName, {
              src: element.children[0].properties.src,
            })
          );
        } else if (element.tagName == "ol" || element.tagName == "ul") {
          // let list = React.createElement(element.tagName, {}, element.children);
          console.log(element);
          let li = [];
          element.children.forEach(list => {
            if (list.tagName === "li") {
              li.push(
                React.createElement(list.tagName, {}, list.children[0].value)
              );
            }
          });
          html.push(React.createElement(element.tagName, {}, li));
        } else {
          html.push(
            React.createElement(
              element.tagName,
              { id: "reg-paragraph" },
              element.children[0].value
            )
          );
        }
      }
      // console.log(element["tagName"]);
    });
    // console.log(html);

    // pTag.forEach(element => {
    //   if (element.nextElement.name == "img") {
    //     element.attrs.id = "image-paragraph";
    //     let img = React.createElement(element.nextElement.name, {
    //       src: element.nextElement.attrs.src,
    //     });
    //     html.push(
    //       React.createElement(element.name, { id: element.attrs.id }, img)
    //     );
    //   } else {
    //     element.attrs.id = "reg-paragraph";
    //     html.push(
    //       React.createElement(
    //         element.name,
    //         { id: element.attrs.id },
    //         element.text
    //       )
    //     );
    //   }
    // });
    // console.log(pTag);
    // console.log(h2Tag);
    // console.log(h3Tag);
    // console.log(html);
    // console.log(testMarkdown);
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
            <section className="markdown">{html}</section>
            <hr
              style={{
                marginBottom: rhythm(1),
              }}
            />
            <Share />
            <footer className="footer">
              <Bio />
            </footer>
            {/* <CommentSection slug={post.slug} /> */}
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
