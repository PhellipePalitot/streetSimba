export default class UserAuthAdapter {
  constructor(controller) {
    this.controller = controller;
  }

  async signIn(login, senha, tipo) {
    // Aqui, vamos utilizar o Visitor para chamar o método correto do controller com base no tipo
    const signInVisitor = {
      admin: () => this.controller.signInAdmin(login, senha, tipo),
      user: () => this.controller.signInUser(login, senha),
    };

    const signInMethod = signInVisitor[tipo];
    if (signInMethod) {
      return signInMethod();
    } else {
      throw new Error("Tipo de usuário inválido");
    }
  }

  async addUser(login, senha, tipo) {
    // Aqui, vamos utilizar o Visitor para chamar o método correto do controller com base no tipo
    const addUserVisitor = {
      admin: () => this.controller.addAdmin(login, senha, tipo),
      user: () => this.controller.addUser(login, senha),
    };

    const addUserMethod = addUserVisitor[tipo];
    if (addUserMethod) {
      return addUserMethod();
    } else {
      throw new Error("Tipo de usuário inválido");
    }
  }
}