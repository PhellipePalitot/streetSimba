class User {
    constructor(login, senha, tipo, logged = false) {
      this.login = login;
      this.senha = senha;
      this.tipo = tipo;
      this.logged = logged;
    }

    accept(visitor) {
      visitor.visit(this);
    }
  }

export default User;