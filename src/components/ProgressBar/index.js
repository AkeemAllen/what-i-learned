import React, { Component } from "react"
import PropTypes from "prop-types"

import "../../utils/stylesheets/progressBar.scss"

export default class ProgressBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      progress: this.props.progress,
    }
  }
  render() {
    const thumbstyle = {
      height: "5px",
      width: `${this.props.progress}%`,
      backgroundColor: "#FE5F55",
      transition: "width 0.3s ease-in-out",
    }
    return (
      <div className="base-container">
        <div className="track">
          <div className="thumb" style={thumbstyle}></div>
        </div>
      </div>
    )
  }
}
