import { notification } from "antd";
import userService from "../services/userService.js";


class UserController {
  
  signInUser(login, senha, tipo){
    const verificaErro = userService.validarLogin(login) || userService.validarSenha(senha);

    if (verificaErro) {
      notification.error({
        message: 'Erro ao realizar login!',
        description: verificaErro,
      });   
      return "error";  
    }

    const result = userService.signIn(login, senha, tipo);
    if (result !== "Você ainda não é cadastrado(a)!"){
      console.info("Login")
      notification.info({
        message: 'Login Realizado com sucesso!',
        description: verificaErro,
      });
      return "logado";
    }
  }

  addUser(login, senha, tipo) {
    const verificaErro = userService.validarLogin(login) || userService.validarSenha(senha);

    if (verificaErro) {
      // Exibe a notificação de erro na tela
      notification.error({
        message: 'Erro ao realizar cadastro!',
        description: verificaErro,
      });
      return; // Interrompe a execução da função
    }

    notification.info({
      message: 'Cadastro com Sucesso',
      description: "Cadastro realizado com sucesso",
    });

    userService.addUser(login, senha, tipo);
  }

  getAllUsers() {
    return userService.getAllUsers();
  }
}

export default new UserController();
