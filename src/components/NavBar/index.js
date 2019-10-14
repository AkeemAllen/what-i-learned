import React, { Component } from "react"
import "../../utils/stylesheets/navBar.scss"
import { Link } from "gatsby"
import icon from "../../../content/assets/placeholder.com-logo3.png"

const NavBar = () => {
  return (
    <nav className="container">
      <div className="inner-navBar">
        {/* <img src={icon} className="icon-image" alt="nav-logo" /> */}
        <h1 className="icon-image">LEARN</h1>
        {/* <button className="btn">Home</button> */}
      </div>
    </nav>
  )
}

export default NavBar
