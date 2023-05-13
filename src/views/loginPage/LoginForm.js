import React, { Component } from "react";
import userController from "../../controllers/userController.js";

class LoginForm extends Component{

  constructor(props){
    super(props);
    this.state = {login: "", senha: "", tipo: "", loggedIn: false}
  
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
    
    if (this.loggedIn === false)
      userController.signInUser(this.login, this.senha, this.tipo);
  }

  handleAddUser = event => {
    event.preventDefault();
    const { login, senha, tipo } = this.state;
    
    try{
      userController.addUser(login, senha, tipo);
    
    }catch(error){
      console.error(error.message);
    }
  }


  render(){
    const { login, senha, tipo } = this.state;
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
            <select name="tipo" value={tipo} onChange={this.handleTipoChange}>
              <option value="user">Usuário</option>
              <option value="admin">Administrador</option>
            </select>
          </div>
          <button type="submit">Entrar</button>
          <button onClick={this.handleAddUser} name="Cadastro">Cadastre-se</button>
        </form>
      </div>
    );
  }  
}

export default LoginForm;
  
  