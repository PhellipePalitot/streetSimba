/*import React, { Component } from "react";
import { Navigate, Router } from "react-router-dom";
import ControllerFacade from "../facade/controllerFacade";

class LoginForm extends Component{

  constructor(props){
    super(props);
    this.state = {login: "", senha: "", tipo: "user", loggedIn: false}
  }  

  handleLoginChange = event =>{
    this.setState({ login: event.target.value })
  }

  handlePasswordChange = event =>{
    this.setState({ senha: event.target.value })
  }

  handleTipoChange = event =>{
    this.setState({ tipo: event.target.value })
  }

  handleSignIn = event => {
    event.preventDefault();
    const { login, senha, tipo } = this.state;
    const validarLogin = ControllerFacade.signInUser(login, senha, tipo);
    
    if (validarLogin === "logado"){
      this.setState({ loggedIn: true });
    }
  }

  handleAddUser = event => {
    event.preventDefault();
    const { login, senha, tipo } = this.state;
    
    try{
      ControllerFacade.addUser(login, senha, tipo);
    
    }catch(error){
      console.error(error.message);
    }
  }


  render(){

    const { login, senha, tipo, loggedIn } = this.state;

    if (loggedIn === true){
      return(
        <Router>
          <Navigate to="/welcome"/>;  
        </Router>
      )
    }

    return (
      <div>
        <form onSubmit={this.handleSignIn}>
          <div>
            <label htmlFor="login">Login:</label>
            <input type="text" name="login" value={login} onChange={this.handleLoginChange} />
          </div>
          <div>
            <label htmlFor="senha">Senha:</label>
            <input type="password" name="senha" value={senha} onChange={this.handlePasswordChange} />
          </div>
          <div>
            <label htmlFor="tipo">Tipo de usuário:</label>
            <select defaultValue={"user"} name="tipo" value={tipo} onChange={this.handleTipoChange}>
              <option value="user">Usuário</option>
              <option value="admin">Administrador</option>
            </select>
          </div>
          <button onClick={this.handleSignIn} type="submit">Entrar</button>
          <button onClick={this.handleAddUser} name="Cadastro">Cadastre-se</button>
        </form>
      </div>
    );
  }  
}

export default LoginForm;*/

import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { Form, Input, Button, Select, Col, Row } from "antd";
import ControllerFacade from "../facade/controllerFacade";
import logo from "../../logo.png"
const { Option } = Select;

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { login: "", senha: "", tipo: "user", loggedIn: false };
  }

  handleLoginChange = (event) => {
    this.setState({ login: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ senha: event.target.value });
  };

  handleTipoChange = (value) => {
    this.setState({ tipo: value });
  };

  redirectTo = (url) => {
    window.location.href = url;
  };

  handleSignIn = async (values) => {
    const { login, senha, tipo } = this.state;
    const validarLogin = await ControllerFacade.signInUser(login, senha, tipo);

    if (validarLogin === "logado") {
      this.setState({ loggedIn: true });
    }
  };

  handleAddUser = async (values) => {
    const { login, senha, tipo } = this.state;

    try {
      await ControllerFacade.addUser(login, senha, tipo);
    } catch (error) {
      console.error(error.message);
    }
  };

  render() {
    const { login, senha, tipo, loggedIn } = this.state;

    if (loggedIn === true) {
      this.redirectTo("http://localhost:3000/welcome");
    }

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Form
          onFinish={this.handleSignIn}
          initialValues={{ tipo: "user" }}
          style={{ maxWidth: "300px" }}
        >
          <Row style={{ textAlign: "center", marginLeft: "30px", marginBottom: "-30px"}}>
          <div>
              <img
                style={{ width: "200px" }}
                src={logo}
                alt="Street Simba Logo"
              />
            </div>
          </Row>
          <Row justify="center" style={{ marginBottom: "20px" }}>
            <h1>Login Street Simba</h1>
          </Row>
          <Form.Item
            label="Login"
            name="login"
            rules={[
              { required: true, message: "Por favor, insira o login." },
              {
                max: 12,
                message: "O login deve ter no máximo 12 caracteres.",
              },
              {
                pattern: /^[^\d\s]+$/,
                message: "O login não pode conter números ou espaços.",
              },
            ]}
          >
            <Input value={login} onChange={this.handleLoginChange} />
          </Form.Item>
          <Form.Item
            label="Senha"
            name="senha"
            rules={[
              { required: true, message: "Por favor, insira a senha." },
              {
                min: 8,
                message: "A senha deve ter pelo menos 8 caracteres.",
              },
              {
                max: 20,
                message: "A senha deve ter no máximo 20 caracteres.",
              },
              {
                pattern: /^(?=.*[A-Za-z])(?=.*\d)/,
                message: "A senha deve ter letras e números.",
              },
            ]}
          >
            <Input.Password
              value={senha}
              onChange={this.handlePasswordChange}
            />
          </Form.Item>
          <Form.Item label="Tipo de usuário" name="tipo">
            <Select
              defaultValue="user"
              value={tipo}
              onChange={this.handleTipoChange}
            >
              <Option value="user">Usuário</Option>
              <Option value="admin">Administrador</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginRight: "10px" }}
            >
              Entrar
            </Button>
            <Button onClick={this.handleAddUser} name="Cadastro">
              Cadastre-se
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default LoginForm;
