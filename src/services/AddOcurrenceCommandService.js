import ocurrenceController from "../controllers/ocurrenceController";

class AddOcurrenceCommand {
    constructor(autor, local, horario, data, descricao) {
      this.autor = autor;
      this.local = local;
      this.horario = horario;
      this.data = data;
      this.descricao = descricao;
    }
  
    execute() {
      // Lógica para adicionar a ocorrência usando os valores armazenados nos atributos da classe
      // Chamadas ao OcurrenceController ou a outras classes relevantes podem ser feitas aqui
      ocurrenceController.addOcurrence(this.autor, this.local, this.horario, this.data, this.descricao);
    }
  }
  
export default AddOcurrenceCommand;