import { notification } from "antd";
import adminService from "../services/adminService.js";

class AdminController {
  signInAdmin(login, senha) {
    const verificaErro = adminService.validarLogin(login) || adminService.validarSenha(senha);

    if (verificaErro) {
      notification.error({
        message: "Erro ao realizar login!",
        description: verificaErro,
      });
      return "error";
    }

    const result = adminService.signIn(login, senha, "admin");
    if (result !== "Você ainda não é cadastrado(a)!") {
      console.info("Login");
      notification.info({
        message: "Login Realizado com sucesso!",
        description: verificaErro,
      });
      return "logado";
    }
  }

  addAdmin(login, senha) {
    const verificaErro = adminService.validarLogin(login) || adminService.validarSenha(senha);

    if (verificaErro) {
      // Exibe a notificação de erro na tela
      notification.error({
        message: "Erro ao realizar cadastro!",
        description: verificaErro,
      });
      return; // Interrompe a execução da função
    }

    notification.info({
      message: "Cadastro com Sucesso",
      description: "Cadastro realizado com sucesso",
    });

    adminService.addUser(login, senha, "admin");
  }

  getAllAdmins() {
    return adminService.getAllUsers().filter((user) => user.tipo === "admin");
  }
}

export default new AdminController();
