import React, { Component } from "react"
import LoginForm from "./LoginForm";

class LoginPage extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <LoginForm  handleLogin={this.handleLogin}/>
      </div>
    )
  }
}

export default LoginPage;