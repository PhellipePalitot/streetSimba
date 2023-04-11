import User from "../models/user";

class UserService {
    constructor() {
      this.users = [];
    }
  
    getAllUsers() {
      return this.users;
    }
  
    addUser(login, password, role) {
      const newUser = new User(login, password, role);
      this.users.push(newUser);
    }
  
    validateLogin(login) {
      if (!login || login === "") {
        return "Login não pode ser vazio.";
      }
  
      if (login.length > 12) {
        return "Login deve ter no máximo 12 caracteres.";
      }
  
      if (/\d/.test(login)) {
        return "Login não pode conter números.";
      }
  
      return null;
    }
  
    validatePassword(password) {
      if (!password || password === "") {
        return "Senha não pode ser vazia.";
      }
  
      if (password.length > 20) {
        return "Senha deve ter no máximo 20 caracteres.";
      }
  
      if (password.length < 8) {
        return "Senha deve ter no mínimo 8 caracteres.";
      }
  
      const hasLettersAndNumbers = /^(?=.*[A-Za-z])(?=.*\d)/.test(password);
      const hasTwoNumbers = (password.match(/\d/g) || []).length >= 2;
  
      if (!hasLettersAndNumbers || !hasTwoNumbers) {
        return "Senha deve ter letras e números e ao menos 2 números.";
      }
  
      return null;
    }
  }
  
  export default new UserService();
  