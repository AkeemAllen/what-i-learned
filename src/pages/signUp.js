import React, { Component } from "react";
import axios from "axios";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      rePassword: "",
      email: "",
    };
  }

  handleSubmit = () => {
    const { name, password, email } = this.state;
    if (
      name.trim().length === 0 ||
      password.trim().length === 0 ||
      email.trim().length === 0
    ) {
      return;
    }

    const requestBody = {
      query: `
            mutation createUser {
                createUser(userInput:{name:"${name}",email:"${email}",password:"${password}"}){
                    id
                    name
                    email
                }
            }
        `,
    };

    axios
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
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div style={styles.baseContainer}>
        <div style={styles.container}>
          <div style={styles.formHeader}>
            <h3>SignUp</h3>
          </div>
          <div style={styles.form}>
            <div style={styles.formGroup}>
              <input
                style={styles.input}
                placeholder="Name"
                name="name"
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div style={styles.formGroup}>
              <input
                style={styles.input}
                placeholder="Email"
                name="email"
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div style={styles.formGroup}>
              <input
                type="password"
                style={styles.input}
                placeholder="Password"
                name="password"
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div style={styles.formGroup}>
              <input
                type="password"
                style={styles.input}
                placeholder="Retype Password"
                name="rePassword"
                onChange={e => this.handleChange(e)}
              />
            </div>
          </div>
          <button onClick={() => this.handleSubmit()} style={styles.button}>
            SignUp
          </button>
        </div>
      </div>
    );
  }
}

export default SignUp;

const styles = {
  baseContainer: {
    textAlign: `center`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    fontFamily: `'Merriweather','Georgia',serif`,
    paddingTop: `5%`,
    paddingBottom: `5%`,
  },
  container: {
    minWidth: `30em`,
    backgroundColor: `white`,
    borderRadius: `5px`,
    boxShadow: `0px 0px 12px 2px rgba(15, 15, 15, 0.2)`,
    fontFamily: `'Merriweather','Georgia',serif`,
    paddingBottom: `3em`,
  },
  formHeader: {
    fontFamily: `'Merriweather','Georgia',serif`,
    fontSize: `20px`,
    fontWeight: `bold`,
  },
  form: {
    fontFamily: `'Merriweather','Georgia',serif`,
  },
  formGroup: {},
  input: {
    marginTop: `30px`,
    minWidth: `18em`,
    border: 0,
    borderBottom: `0.5px solid lightgray`,
    backgroundColor: /*rgba(246, 247, 235, 1);*/ `white`,
    borderRadius: `2px`,
    padding: `1em`,
  },
  button: {
    marginTop: `50px`,
    backgroundColor: `white`,
    border: `solid 1px #FE5F55`,
    borderRadius: `4px`,
    fontWeight: `bold`,
    color: `#FE5F55`,
  },
};
