import ocurrenceController from "../controllers/ocurrenceController";

class DeleteOcurrenceCommand {
    constructor(ocurrence) {
      this.ocurrence = ocurrence;
    }
  
    execute() {
      // Lógica para excluir a ocorrência usando o objeto de ocorrência armazenado no atributo da classe
      // Chamadas ao OcurrenceController ou a outras classes relevantes podem ser feitas aqui
      ocurrenceController.deleteOcurrence(this.ocurrence);
    }
  }

export default DeleteOcurrenceCommand;