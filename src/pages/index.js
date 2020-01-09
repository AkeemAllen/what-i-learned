import React from "react";
import { Link, graphql } from "gatsby";
import SEO from "../components/seo";
import SplashImage from "../components/SplashImage";
import "../utils/stylesheets/mainStyle.scss";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import { Twitter, Mail, Instagram } from "@material-ui/icons";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allContentfulBlogPost.edges;

    return (
      <div className="main-container">
        <SplashImage />
        <div className="grid-format">
          <SEO title="All posts" />
          {posts.map(({ node }) => {
            return (
              <article className="article">
                <Link
                  to={node.slug}
                  style={{ display: "flex", color: "white" }}
                >
                  <Card
                    classes={{
                      root: "card",
                    }}
                  >
                    <img
                      src={node.indexPhoto.fixed.src}
                      className="card-image"
                      alt="Inspiration"
                    />
                    <CardHeader
                      component="div"
                      title={node.title}
                      subheader={node.date}
                      classes={{
                        title: "card-header-title",
                        subheader: "card-header-subheader",
                      }}
                    />
                    <CardContent
                      classes={{
                        root: "card-content",
                      }}
                    >
                      {node.description.childMarkdownRemark.excerpt}
                    </CardContent>
                  </Card>
                </Link>
              </article>
            );
          })}
        </div>
        <div className="footer-container">
          <div className="top">
            <a href="https://twitter.com/Akstar39306982">
              <Twitter className="icon" />
            </a>
            <a href="mailto:allenakeem8@gmail.com">
              <Mail className="icon" />
            </a>
            <a href="https://www.instagram.com/beyond4321/">
              <Instagram className="icon" />
            </a>
          </div>
          <div className="bottom">&#169; 2020 Akeem Allen</div>
        </div>
      </div>
    );
  }
}

export default BlogIndex;

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
            childMarkdownRemark {
              excerpt
            }
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
`;
