import React, { Component } from "react"
import { graphql } from "gatsby"

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      password: "",
      rePassword: "",
      email: "",
    }
  }

  handleSubmit = () => {
    const { firstName, lastName, password, email } = this.state
    if (
      firstName.trim().length === 0 ||
      lastName.trim().length === 0 ||
      password.trim().length === 0 ||
      email.trim().length === 0
    ) {
      return
    }

    const requestBody = {
      query: `
            mutation addUser {
                addUser(firstName:"${firstName}",lastName:"${lastName}",email:"${email}",password:"${password}"){
                    id
                    email
                    firstName
                    lastName
                }
            }
        `,
    }

    fetch("http://74.207.224.133:8081/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

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
                placeholder="FirstName"
                name="firstName"
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div style={styles.formGroup}>
              <input
                style={styles.input}
                placeholder="LastName"
                name="lastName"
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
                style={styles.input}
                placeholder="Password"
                name="password"
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div style={styles.formGroup}>
              <input
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
    )
  }
}

export default SignUp

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
}
