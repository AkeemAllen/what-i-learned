import React, { Component } from "react"
import splashImage from "../../../content/assets/index-background-books.jpg"
import "./styles.scss"
import NavBar from "../NavBar"

const SplashImage = () => {
  return (
    <div className="base-container">
      <div className="overlay">
        <div className="top">
          <NavBar />
        </div>
        <div className="middle">
          <div className="text">
            <h1>What I Learned</h1>
            <h3>Claim the written knowledge</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SplashImage
