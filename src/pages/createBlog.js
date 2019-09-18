import React, { Component } from "react"
import NavBar from "../components/NavBar"
import { rhythm, scale } from "../utils/typography"
import * as contentful from "contentful-management"

import "./style.scss";

class BlogCreator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      description: "",
    }
  }
  handleChange = event => {
    event.preventDefault()
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
    // console.log(title);
  }
  createNewEntry = () => {
      const client = contentful.createClient({
          accessToken:process.env.CONTENTFUL_ACCESS_TOKEN
      });

      client.getSpace(process.env.CONTENTFUL_SPACE_ID)
      .then((space) => space.createEntry('blogPost'), {
          fields: {
              title:"test",
              slug:"test",
              date:"2019-4-4",
              description:"test",
              body:"test"
          }
      })
      .then((entry) => {console.log(entry)})
      .catch(console.error)
  }
  handleSubmit = () => {}
  render() {
    return (
      <div
        style={{ padding: 0, margin: 0, border: 0, backgroundColor: "#F4FAFF", minHeight:"100vh" }}
      >
       <NavBar/>
        <div 
        className="base-container"
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
        }}>
            <div className="form">
                <div className="form-group">
                    <label>Title</label>
                    <br/>
                    <input
                        name="title"
                        placeholder="Title"
                    />
                </div>
                <div className="form-group">
                    <label>Slug</label>
                    <br/>
                    <input
                        name="title"
                        placeholder="Slug"
                    />
                </div>
                <div className="form-group">
                    <label>Date</label>
                    <br/>
                    <input
                        name="title"
                        placeholder="Date"
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <br/>
                    <input
                        name="title"
                        placeholder="Description"
                    />
                </div>
                <div className="form-group">
                    <label>Body</label>
                    <br/>
                    <input
                        name="title"
                        placeholder="Body"
                    />
                </div>
            </div>
            <div className="btn-container">
                <button className="btn" onClick={this.createNewEntry}>Create Blog</button>
            </div>
       </div>
      </div>
    )
  }
}

export default BlogCreator
