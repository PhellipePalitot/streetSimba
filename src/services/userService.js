import User from "../models/user";

class UserService {
  constructor() {
    this.users = new Map();
  }

  signIn(login, senha, role) {
    const usersArray = Array.from(this.users.values());
    for (let i = 0; i < usersArray.length; i++) {
      const user = usersArray[i];
      if (user.login === login && user.senha === senha && user.tipo === role) {
        user.logged = true;
        return user; // Retorna o usuário encontrado
      }
    }
    return "Você ainda não é cadastrado(a)!";
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

  validarLogin(login) {
    if (!login || login === "") {
      console.log("Resultado: " + login);
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

  validarSenha(senha) {
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
