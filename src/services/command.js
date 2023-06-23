class Command {
    constructor(controllerFacade) {
      this.controllerFacade = controllerFacade;
    }
  
    execute() {
      throw new Error("O método execute deve ser implementado nas subclasses.");
    }
  }
  
  export default Command;
  