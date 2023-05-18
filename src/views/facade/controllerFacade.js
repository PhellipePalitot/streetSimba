import UserController from "../../controllers/userController";
import OcurrenceController from "../../controllers/ocurrenceController";

class ControllerFacade {

  getAllOcurrences(){
    return OcurrenceController.getAllOcurrences();
  }

  getOcurrence(ocurrence){
    return OcurrenceController.getOcurrence(ocurrence);
  }

  addOcurrence(autor, local, horario, data, descricao){
    OcurrenceController.addOcurrence(autor, local, horario, data, descricao);
  }

  deleteOcurrence(ocurrence){
    OcurrenceController.deleteOcurrence(ocurrence);
  }

  signInUser(login, senha, tipo){
      
    UserController.signInUser(login, senha, tipo);
  }

  addUser(login, senha, tipo) {
    
    UserController.addUser(login, senha, tipo);
  }

  getAllUsers() {
    return UserController.getAllUsers();
  }

}

export default new ControllerFacade();