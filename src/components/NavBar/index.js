import React, { Component } from "react"
import "./style.scss"
import { Link } from "gatsby"
import icon from "../../../content/assets/gatsby-icon.png"

const NavBar = () => {
  return (
    <nav className="container">
      <div className="inner-navBar">
        <div className="left-side">
          <img src={icon} className="icon-image" />
          {/* <h3>WHAT I LEARNED</h3> */}
        </div>
        <div className="btn-container">
          {/* <Link to="/" className="link"> */}
          <button className="btn">
            <p>Home</p>
          </button>
          {/* </Link> */}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
