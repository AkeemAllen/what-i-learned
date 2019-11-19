import React, { Component } from "react";
import "../utils/stylesheets/navBar.scss";
import { Link } from "gatsby";

const NavBar = () => {
  return (
    <nav className="container">
      <div className="inner-navBar">
        {/* <img src={icon} className="icon-image" alt="nav-logo" /> */}
        <Link to="/">
          <h1 className="icon-image">LEARN</h1>
        </Link>
        {/* <button className="btn">Home</button> */}
      </div>
    </nav>
  );
};

export default NavBar;
