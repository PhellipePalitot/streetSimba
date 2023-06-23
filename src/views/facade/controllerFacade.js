import UserController from "../../controllers/userController";
import AdminController from "../../controllers/adminController";
import OcurrenceController from "../../controllers/ocurrenceController";

class ControllerFacade {
  getAllOcurrences() {
    return OcurrenceController.getAllOcurrences();
  }

  getOcurrence(ocurrence) {
    return OcurrenceController.getOcurrence(ocurrence);
  }

  addOcurrence(autor, local, horario, data, descricao) {
    OcurrenceController.addOcurrence(autor, local, horario, data, descricao);
  }

  deleteOcurrence(ocurrence) {
    OcurrenceController.deleteOcurrence(ocurrence);
  }

  signInUser(login, senha, tipo) {
      return UserController.signInUser(login, senha, tipo);
  }

  addUser(login, senha, tipo) {
      UserController.addUser(login, senha, tipo);

  }

  userRecoverPassword(login) {
    UserController.recoverPassword(login);
  }

  signInAdmin(login, senha) {
      return AdminController.signInAdmin(login, senha);
  }

  addAdmin(login, senha) {
      AdminController.addAdmin(login, senha);
  }

  adminRecoverPassword(login) {
    AdminController.recoverPassword(login);
  }

  getAllUsers() {
    return UserController.getAllUsers();
  }

  executeCommand(command) {
    command.execute();
  }
}

export default new ControllerFacade();
