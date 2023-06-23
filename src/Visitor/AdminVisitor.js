import Visitor from "./Visitor";

export default class AdminVisitor extends Visitor {
  async signIn(login, senha) {
    return this.controllerFacade.signInAdmin(login, senha, "admin");
  }

  async addUser(login, senha) {
    this.controllerFacade.addAdmin(login, senha, "admin");
  }

  async recoverPassword(login, senha) {
    this.controllerFacade.adminRecoverPassword(login, senha, "admin");
  }

}
