import React, { Component } from "react"
import "./style.scss"
import { Link } from "gatsby"

const NavBar = () => {
  return (
    <nav className="container">
      <div className="innerNavBar">
        <div>
          <h3>WHAT I LEARNED</h3>
        </div>
        <div className="btn-container">
          {/* <Link to="/" className="link">
            <button className="btn">
              <p>Home</p>
            </button>
          </Link> */}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
