export default class Visitor {
  constructor(controllerFacade) {
    this.controllerFacade = controllerFacade;
  }

  // Método de autenticação
  async signIn(login, senha) {
    throw new Error("Método signIn não implementado.");
  }

  // Método de adição de usuário
  async addUser(login, senha) {
    throw new Error("Método addUser não implementado.");
  }
}