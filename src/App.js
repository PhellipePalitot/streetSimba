import React, { useState } from "react";
import UserController from "./controllers/userController.js";

function App() {
  
  const [login, setLogin] = useState("");
  const [senha, setPassword] = useState("");
  const [tipo, setTipo] = useState("Usuário");
  const [users, setUsers] = useState(UserController.getAllUsers());

  function handleLoginChange(event) {
    setLogin(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleTipoChange(event) {
    setTipo(event.target.value);
  }

  function handleAddUser(event) {
    event.preventDefault();

    try {
      UserController.addUser(login, senha, tipo);
      setUsers(UserController.getAllUsers());
      setLogin("");
      setPassword("");
      setTipo("Usuário");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <form onSubmit={handleAddUser}>
        <div>
          <label htmlFor="login">Login:</label>
          <input type="text" id="login" value={login} onChange={handleLoginChange} />
        </div>
        <div>
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" value={senha} onChange={handlePasswordChange} />
        </div>
        <div>
          <label htmlFor="tipo">Tipo de usuário:</label>
          <select id="tipo" value={tipo} onChange={handleTipoChange}>
            <option value="Usuário">Usuário</option>
            <option value="admin">Administrador</option>
          </select>
        </div>
        <button type="submit">Adicionar usuário</button>
      </form>
      <hr />
      <h2>Lista de usuários:</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            Login: {user.login} - Senha: {user.senha} - Tipo: {user.tipo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
