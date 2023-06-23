import controllerFacade from "../views/facade/controllerFacade";
import AddOcurrenceCommand from "./AddOcurrenceCommandService";
import DeleteOcurrenceCommand from "./DeleteOcurrenceCommandService";

class CommandFactory {
  constructor() {
    this.controllerFacade = controllerFacade;
  }

  createAddOcurrenceCommand(autor, local, horario, data, descricao) {
    return new AddOcurrenceCommand(autor, local, horario, data, descricao, this.controllerFacade);
  }

  createDeleteOcurrenceCommand(ocurrence) {
    return new DeleteOcurrenceCommand(ocurrence, this.controllerFacade);
  }
}

export default new CommandFactory();
