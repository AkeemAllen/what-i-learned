import React from "react";
import "../../utils/stylesheets/commentSection.scss";
import Bio from "./commenterBio";
import Comment from "./comment";
import axios from "axios";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [
        {
          index: 1,
          comment: "First",
          writer: {
            name: "Akeem Allen",
          },
          date: "September 11, 2019",
        },
      ],
      newComment: "",
    };
  }

  componentDidMount() {
    this.getComments();
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  postComment = async () => {
    const requestBody = {
      query: `
        mutation addComment {
          addComment(input:{body:"${this.state.newComment}",postSlug:"${this.props.slug}"}){
            id
            body
            postSlug
          }
        }
        `,
    };

    await axios
      .post("http://localhost:8081/graphql", JSON.stringify(requestBody), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  getComments = async () => {
    const requestBody = {
      query: `
      query getComment {
        getCommentByPost(postSlug:"${this.props.slug}") {
          id
          postSlug
          body
          writer {
            name
          }
        }
      }
        `,
    };

    await axios
      .post("http://localhost:8081/graphql", JSON.stringify(requestBody), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(response => {
        console.log(response);
        const comments = response.data.data.getCommentByPost;
        this.setState({
          comments: comments,
        });
        console.log(this.state.comments);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { comments } = this.state;

    return (
      <div className="comment-base-container">
        <h3>Comments</h3>
        <div className="add-comment">
          <textarea
            placeholder="Comment Here"
            name="newComment"
            onChange={this.handleChange}
          />
          <button
            className="add-comment-btn"
            onClick={() => this.postComment()}
          >
            Comment
          </button>
        </div>
        <div className="comment-container">
          {comments.map((comment, index) => (
            <div key={index}>
              <Bio
                key={index}
                index={index}
                author={comment.writer.name}
                date={comment.date}
              />
              <Comment comment={comment.body} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CommentSection;
