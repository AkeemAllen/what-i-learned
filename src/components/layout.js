import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

import "../utils/stylesheets/layout.scss"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link className="title-link" to={`/`}>
            {title}
          </Link>
        </h1>
      )
    } else {
      header = ""
    }
    return (
      <div className="layout-container">
        {/* <header>{header}</header> */}
        <main>{children}</main>
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      </div>
    )
  }
}

export default Layout
