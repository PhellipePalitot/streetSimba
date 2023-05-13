import userService from "../services/userService.js";


class UserController {
  
  signInUser(login, senha, tipo){
    const verificaErro = userService.validarLogin(login) || userService.validarSenha(senha);

    if (verificaErro) {
      throw new Error(verificaErro);
    }
    
    userService.addUser(login, senha, tipo)
    const result = userService.signIn();
    if (result !== "Você ainda não é cadastrado(a)!"){
      return "Pagina inicial";
    }
  }

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
