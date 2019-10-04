import React from "react";
import "./style.scss";
import Bio from "./commenterBio";
import Comment from "./comment";
// import axios from "axios"

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [
        {
          index: 1,
          comment: "First",
          author: "Akeem Allen",
          date: "September 11, 2019",
        },
      ],
    };
  }

  handleChange = () => {};

  render() {
    const { comments } = this.state;

    return (
      <div className="base-container">
        <h3>Comments</h3>
        <div className="add-comment">
          <textarea
            placeholder="Comment Here"
            name="addComment"
            onChange={this.handleChange}
          />
        </div>
        <div className="comment-container">
          {comments.map((comment, index) => (
            <div key={index}>
              <Bio
                key={index}
                index={index}
                author={comment.author}
                date={comment.date}
              />
              <Comment comment={comment.comment} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CommentSection;
