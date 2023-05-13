class User {
    constructor(login, senha, tipo, logged = false) {
      this.login = login;
      this.senha = senha;
      this.tipo = tipo;
      this.logged = logged;
    }
  }

export default User;