import React from "react";
import "./style.scss";

const img =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Placeholder_no_text.svg/600px-Placeholder_no_text.svg.png";

const Bio = props => {
  return (
    <div className="base-container-bio">
      <img className="img-style" src={img} alt="profile-img" />
      <div className="text-container">
        <p className="header">{props.author}</p>
        <p className="text">{props.date}</p>
      </div>
    </div>
  );
};

export default Bio;
