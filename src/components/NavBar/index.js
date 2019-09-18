import React, { Component } from "react"
import "./style.scss"
import { Link } from "gatsby"
import CrudNav from "../CRUDNavBar/index"

const NavBar = () => {
  return (
    <nav className="container">
      <div className="innerNavBar">
        <div>
          <h3>WHAT I LEARNED</h3>
        </div>
        <div className="links">
          <ul>
            <li>{/* <Link to="/blogCreater">Create New Blog</Link> */}</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
