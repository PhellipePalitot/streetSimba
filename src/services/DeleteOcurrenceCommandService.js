import Command from "./command.js";

class DeleteOcurrenceCommand extends Command {
  constructor(ocurrence, controllerFacade) {
    super(controllerFacade);
    this.ocurrence = ocurrence;
  }

  execute() {
    this.controllerFacade.deleteOcurrence(this.ocurrence);
  }
}

export default DeleteOcurrenceCommand;
