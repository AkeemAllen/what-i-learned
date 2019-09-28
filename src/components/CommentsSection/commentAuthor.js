import React from "react"

const img =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Placeholder_no_text.svg/600px-Placeholder_no_text.svg.png"

const Bio = props => {
  return (
    <div style={styles.container}>
      <img src={img} style={styles.imgStyle} />
      <div style={styles.textContainer}>
        <p style={styles.header}>{props.author}</p>
        <p style={styles.text}>{props.date}</p>
      </div>
    </div>
  )
}

export default Bio

const styles = {
  container: {
    display: "flex",
    margin: 0,
    padding: 0,
    border: 0,
    outline: 0,
    fontSize: "100%",
  },
  imgStyle: {
    borderRadius: "50%",
    backgroundColor: "gray",
    maxWidth: "50px",
    maxHeight: "50px",
  },
  textContainer: {
    marginLeft: "20px",
    height: "50px",
    fontFamily: `'Roboto', sans-serif`,
  },
  header: {
    fontWeight: "bold",
    margin: 0,
    padding: 0,
  },
  text: {
    margin: 0,
    padding: 0,
  },
}
