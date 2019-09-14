import React, { Component } from 'react'

class BlogCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        }
    }
    handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
        // console.log(title);
    }
    handleSubmit = () => {
    }
    render () {
        return (
            <div>
                <h1>Create Blogs</h1>
                <div>
                    <div className="form-group">
                        <label>Article Title</label>
                        <input 
                            type="text"
                            name="title"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Article Description</label>
                        <textarea
                            name="description"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button onClick={this.handleSubmit}>
                        Create Blog
                    </button>
                </div>
            </div>
        )
    }
}

export default BlogCreator;