import React, { useState } from "react";
import UserController from "./controllers/userController.js";

function App() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [users, setUsers] = useState(UserController.getAllUsers());

  function handleLoginChange(event) {
    setLogin(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleRoleChange(event) {
    setRole(event.target.value);
  }

  function handleAddUser(event) {
    event.preventDefault();

    try {
      UserController.addUser(login, password, role);
      setUsers(UserController.getAllUsers());
      setLogin("");
      setPassword("");
      setRole("user");
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
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <label htmlFor="role">Tipo de usuário:</label>
          <select id="role" value={role} onChange={handleRoleChange}>
            <option value="user">Usuário comum</option>
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
            Login: {user.login} - Senha: {user.password} - Tipo: {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
