import React, { Component } from "react"
import LoginForm from "./LoginForm";

class LoginPage extends Component {
  render() {
    return (
      <div>
        <LoginForm  handleLogin={this.handleLogin}/>
      </div>
    )
  }
}

export default LoginPage;