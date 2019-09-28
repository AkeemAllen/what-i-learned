import React from "react"

const Comment = props => {
  return (
    <div style={styles.container}>
      <p style={styles.text}>{props.comment}</p>
    </div>
  )
}

export default Comment

const styles = {
  container: {
    border: "solid 0.5px #f2f4f7",
    borderRadius: "10px",
    marginBottom: "50px",
    fontFamily: `"Roboto", sans-serif`,
    padding: 0,
  },
  text: {
    padding: "30px",
    fontSize: "100%",
  },
}
