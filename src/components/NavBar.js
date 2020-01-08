import React from "react";
import "../utils/stylesheets/navBar.scss";
import { Link } from "gatsby";

const NavBar = () => {
  return (
    <nav className="container">
      <div className="inner-navBar">
        <Link to="/">
          <h1 className="icon-image">LEARN</h1>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
