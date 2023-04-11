import User from "../models/user";

class UserService {
  constructor() {
    this.users = new Map();
  }

  getAllUsers() {
    return Array.from(this.users.values());
  }

  addUser(login, senha, role) {
    const newUser = new User(login, senha, role);
    this.users.set(login, newUser);
  }

  removeUser(login) {
    this.users.delete(login);
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

  validatePassword(senha) {
    if (!senha || senha === "") {
      return "Senha não pode ser vazia.";
    }

    if (senha.length > 20) {
      return "Senha deve ter no máximo 20 caracteres.";
    }

    if (senha.length < 8) {
      return "Senha deve ter no mínimo 8 caracteres.";
    }

    const hasLettersAndNumbers = /^(?=.*[A-Za-z])(?=.*\d)/.test(senha);
    const hasTwoNumbers = (senha.match(/\d/g) || []).length >= 2;

    if (!hasLettersAndNumbers || !hasTwoNumbers) {
      return "Senha deve ter letras e números e ao menos 2 números.";
    }

    return null;
  }
}

export default new UserService();
