import React, { Component } from "react"
import { Link } from "gatsby"

import "./style.scss"

const CRUDNavBar = () => {
  return (
    <nav className="base-container">
      <div className="inner-nav">
        <div className="btn-container">
          <Link to="/createBlog">
            <button className="btn">Create Blog</button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default CRUDNavBar
