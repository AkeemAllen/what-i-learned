import React from "react";
import { Link, graphql } from "gatsby";
import Image from "gatsby-image";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

import SplashImage from "../components/SplashImage";
import "../utils/stylesheets/mainStyle.scss";
import media from "../../content/assets/book-bindings-close-up-composition-669988.jpg";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardMedia,
  Avatar,
  IconButton,
  MoreVertIcon,
} from "@material-ui/core";
import Footer from "../components/Footer";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allContentfulBlogPost.edges;

    return (
      <div className="main-container">
        {/* <NavBar /> */}
        <SplashImage />
        {/* <Layout
          className="grid-format"
          location={this.props.location}
          title={siteTitle}
        > */}
        <div className="grid-format">
          <SEO title="All posts" />
          {/* <Bio /> */}
          {posts.map(({ node }) => {
            return (
              <article className="article">
                <Card
                  classes={{
                    root: "card",
                  }}
                >
                  <img src={node.indexPhoto.fixed.src} />
                  <Link to={node.slug} style={{ color: "black" }}>
                    <CardHeader
                      component="div"
                      title={node.title}
                      subheader={node.date}
                      classes={{
                        title: "card-header-title",
                        subheader: "card-header-subheader",
                      }}
                    />
                  </Link>
                  <CardContent
                    classes={{
                      root: "card-content",
                    }}
                  >
                    {node.description.childMarkdownRemark.excerpt}
                  </CardContent>
                </Card>
              </article>
            );
          })}
        </div>
        {/* </Layout> */}
        <Footer />
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
