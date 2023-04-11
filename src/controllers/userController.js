import userService from "../services/userService.js";


class UserController {
  addUser(login, senha, tipo) {
    const verificaErro = userService.validarLogin(login) || userService.validarSenha(senha);

    if (verificaErro) {
      throw new Error(verificaErro);
    }

    userService.addUser(login, senha, tipo);
  }

  getAllUsers() {
    return userService.getAllUsers();
  }
}

export default new UserController();
