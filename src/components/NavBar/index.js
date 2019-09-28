import React, { Component } from "react"
import "./style.scss"
import { Link } from "gatsby"
import ProgressBar from "../ProgressBar"

const NavBar = props => {
  return (
    <nav className="container">
      <div className="innerNavBar">
        <div>
          <h3>WHAT I LEARNED</h3>
        </div>
        <div className="btn-container">
          <Link to="/" className="link">
            <button className="btn">
              <p>Home</p>
            </button>
          </Link>
          <Link to="/" className="link">
            <button className="btn">
              <p>Books</p>
            </button>
          </Link>
          <Link to="/" className="link">
            <button className="btn">
              <p>Technology</p>
            </button>
          </Link>
          <Link to="/" className="link">
            <button className="btn">
              <p>Philosophy</p>
            </button>
          </Link>
        </div>
      </div>
      {/* <ProgressBar progress={props.progress}/> */}
    </nav>
  )
}

export default NavBar
