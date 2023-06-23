import AdminVisitor from "../Visitor/AdminVisitor";
import UserVisitor from "../Visitor/UserVisitor";
import controllerFacade from "../views/facade/controllerFacade";

class UserAuthAdapter {
  constructor() {
    this.controllerFacade = controllerFacade;
  }

  async signIn(login, senha, tipo) {
    const visitor = this.createVisitor(tipo);
    return visitor.signIn(login, senha);
  }

  async addUser(login, senha, tipo) {
    const visitor = this.createVisitor(tipo);
    return visitor.addUser(login, senha);
  }

  createVisitor(tipo) {
    switch (tipo) {
      case "admin":
        return new AdminVisitor(this.controllerFacade);
      case "user":
        return new UserVisitor(this.controllerFacade);
      default:
        throw new Error(`Tipo de usuário inválido: ${tipo}`);
    }
  }
}

export default new UserAuthAdapter();