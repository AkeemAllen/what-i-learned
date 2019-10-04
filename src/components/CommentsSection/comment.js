import React from "react";

const Comment = props => {
  return (
    <div
      style={{
        border: "solid 0.5px #f2f4f7",
        borderRadius: "10px",
        marginBottom: "50px",
        fontFamily: `"Roboto", sans-serif`,
        padding: 0,
      }}
    >
      <p style={{ padding: "30px", fontSize: "100%" }}>{props.comment}</p>
    </div>
  );
};

export default Comment;
