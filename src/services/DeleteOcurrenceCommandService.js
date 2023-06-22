import controllerFacade from "../views/facade/controllerFacade";

class DeleteOcurrenceCommand {
    constructor(ocurrence) {
      this.ocurrence = ocurrence;
    }
  
    execute() {
      // Lógica para excluir a ocorrência usando o objeto de ocorrência armazenado no atributo da classe
      // Chamadas ao OcurrenceController ou a outras classes relevantes podem ser feitas aqui
      controllerFacade.deleteOcurrence(this.ocurrence);
    }
  }

export default DeleteOcurrenceCommand;