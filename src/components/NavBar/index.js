import React, { Component } from "react"
import "../../utils/stylesheets/navBar.scss"
import { Link } from "gatsby"
import icon from "../../../content/assets/placeholder.com-logo3.png"

const NavBar = () => {
  return (
    <nav className="container">
      <div className="inner-navBar">
        <div className="left-side">
          <img src={icon} className="icon-image" alt="nav-logo" />
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
