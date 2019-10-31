import React, { Component } from "react";
import "../utils/stylesheets/splashImage.scss";
import { Twitter, Mail, Facebook, Instagram, Menu } from "@material-ui/icons";
import logo from "../../content/assets/placeholder.com-logo3.png";
import { Link } from "gatsby";

const SplashImage = () => {
  return (
    <div className="base-container">
      <div className="overlay">
        {/* <div className="top">Test</div> */}
        <div className="middle-container">
          <div className="site-mast">
            <div className="site-mast-left">
              <img className="logo" src={logo} />
            </div>
            <Menu className="toggle-icon" />
            <div className="site-mast-right">
              <Link>
                <Twitter className="icon" />
              </Link>
              <Link>
                <Mail className="icon" />
              </Link>
              <Link>
                <Facebook className="icon" />
              </Link>
              <Link>
                <Instagram className="icon" />
              </Link>
            </div>
          </div>
          <div className="site-banner">
            <h1>What I Learned</h1>
            <h3>Claim the written knowledge</h3>
          </div>
          {/* <div className="site-nav">
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SplashImage;
