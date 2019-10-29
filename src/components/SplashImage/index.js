import React, { Component } from "react";
import "../../utils/stylesheets/splashImage.scss";
import { Twitter, Mail, Facebook, Instagram } from "@material-ui/icons";
import logo from "../../../content/assets/placeholder.com-logo3.png";

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
            <div className="site-mast-right">
              <a>
                <Twitter className="icon" />
              </a>
              <a>
                <Mail className="icon" />
              </a>
              <a>
                <Facebook className="icon" />
              </a>
              <a>
                <Instagram className="icon" />
              </a>
            </div>
          </div>
          <div className="site-banner">
            <h1>What I Learned</h1>
            <h3>Claim the written knowledge</h3>
          </div>
          <div className="site-nav">
            {/* <h1>What I Learned</h1>
            <h3>Claim the written knowledge</h3> */}
            text
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashImage;
