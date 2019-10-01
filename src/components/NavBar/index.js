import React, { Component } from "react"
import "./style.scss"
import { Link } from "gatsby"
import ProgressBar from "../ProgressBar"

const NavBar = props => {
  return (
    <nav className="container">
      <div className="innerNavBar">
        <div>
          <Link to="/">
            <h3>WHAT I LEARNED</h3>
          </Link>
        </div>
        <div className="btn-container">
          <Link to="/" className="link">
            <button className="btn">
              <p>Login</p>
            </button>
          </Link>
          <Link to="/signUp" className="link">
            <button className="btn">
              <p>Sign Up</p>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
