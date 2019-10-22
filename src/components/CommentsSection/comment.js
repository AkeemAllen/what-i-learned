import React from "react";

const Comment = props => {
  return (
    <div
      style={{
        border: "solid 1px #6e7175",
        borderRadius: "5px",
        marginBottom: "30px",
        fontFamily: `"Roboto", sans-serif`,
        padding: 0,
      }}
    >
      <p style={{ padding: "10px 20px 5px 20px", fontSize: "100%" }}>
        {props.comment}
      </p>
    </div>
  );
};

export default Comment;
