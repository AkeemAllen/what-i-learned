import React from "react";
import "../../utils/stylesheets/commentSection.scss";
import Bio from "./commenterBio";
import Comment from "./comment";
import axios from "axios";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      newComment: "",
      commentWasAdded: false,
      commentor: "Anonymous",
    };
  }

  componentDidMount() {
    this.getComments();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.commentWasAdded !== prevState.commentWasAdded) {
      this.getComments();
      this.setState({
        commentWasAdded: false,
      });
    }
  }

  getDate = () => {
    const currentDate = new Date().getTime();
    return currentDate;
  };

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
          addComment(input:{body:"${this.state.newComment}",postSlug:"${
        this.props.slug
      }",writer:"${
        this.state.commentor == "" ? "Anonymous" : this.state.commentor
      }"}){
            id
            body
            postSlug
          }
        }
        `,
    };

    await axios
      .post(
        "http://www.whatilearnedarchives.com:8081/graphql",
        JSON.stringify(requestBody),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(response => {
        console.log(response);
        this.setState({
          commentWasAdded: true,
        });
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
          writer
          date
        }
      }
        `,
    };

    await axios
      .post(
        "http://www.whatilearnedarchives.com:8081/graphql",
        JSON.stringify(requestBody),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
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
    const { comments, disabled, newComment } = this.state;

    return (
      <div className="comment-base-container">
        <h3>Comments</h3>
        <div className="add-comment">
          <input
            placeholder="Name: Default Anonymous"
            name="commentor"
            onChange={this.handleChange}
          />
          <input
            placeholder="Comment Here"
            name="newComment"
            onChange={this.handleChange}
          />
          <button
            className="add-comment-btn"
            disabled={newComment == "" ? true : false}
            onClick={() => this.postComment()}
          >
            Comment
          </button>
        </div>
        <div className="comment-container">
          {comments.map((comment, index) => (
            <div className="comment" key={index}>
              <Bio
                key={index}
                index={index}
                author={comment.writer}
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
