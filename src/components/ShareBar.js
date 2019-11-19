import React, { Component } from "react";
import { Twitter } from "@material-ui/icons";
import "../utils/stylesheets/share.scss";

const Share = props => {
  const message = `Check out this blog at https://www.whatilearnedarchives.com/${props.slug}`;
  return (
    <div className="social-share">
      <a href={`https://twitter.com/intent/tweet?text=${message}`}>
        <p>
          <Twitter className="social-icon" />
        </p>
        <p>SHARE</p>
      </a>
    </div>
  );
};

export default Share;
