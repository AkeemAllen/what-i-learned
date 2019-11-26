import React, { Component } from "react";
import "../utils/stylesheets/splashImage.scss";
import { Twitter, Mail, Facebook, Instagram, Menu } from "@material-ui/icons";
import logo from "../../content/assets/placeholder.com-logo3.png";
import { Link } from "gatsby";

class SplashImage extends Component {
  handClick = () => {
    console.log("Hello");
  };
  render() {
    return (
      <div className="base-container">
        <div className="overlay">
          <div className="middle-container">
            <div className="site-mast">
              <div className="site-mast-left">
                <h1>LEARN</h1>
              </div>
              <div className="site-mast-right">
                <a href="https://twitter.com/Akstar39306982">
                  <Twitter className="icon" />
                </a>
                <a href="mailto:allenakeem8@gmail.com">
                  <Mail className="icon" />
                </a>
                <a href="https://www.instagram.com/beyond4321/">
                  <Instagram className="icon" />
                </a>
              </div>
            </div>
            <div className="site-banner">
              <h1>What I Learned</h1>
              <h3>Claim the written knowledge</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SplashImage;
