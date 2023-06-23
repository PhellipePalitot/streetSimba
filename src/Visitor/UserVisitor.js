import Visitor from "./Visitor";

export default class UserVisitor extends Visitor {
    async signIn(login, senha) {
      return this.controllerFacade.signInUser(login, senha, "user");
    }
  
    async addUser(login, senha) {
      this.controllerFacade.addUser(login, senha, "user");
    }

    async recoverPassword(login, senha) {
        this.controllerFacade.userRecoverPassword(login, senha, "admin");
      }
    
  }