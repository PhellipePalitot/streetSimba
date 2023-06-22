// Adapter
export default class UserAuthAdapter {
    constructor(userController) {
      this.userController = userController;
    }
  
    async signIn(login, senha, tipo) {
      return this.userController.signInUser(login, senha, tipo);
    }
  
    async addUser(login, senha, tipo) {
      return this.userController.addUser(login, senha, tipo);
    }
  }
  