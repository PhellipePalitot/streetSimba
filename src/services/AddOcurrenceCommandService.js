import Command from "./command.js";

class AddOcurrenceCommand extends Command {
  constructor(autor, local, horario, data, descricao, controllerFacade) {
    super(controllerFacade);
    this.autor = autor;
    this.local = local;
    this.horario = horario;
    this.data = data;
    this.descricao = descricao;
  }

  execute() {
    this.controllerFacade.addOcurrence(this.autor, this.local, this.horario, this.data, this.descricao);
  }
}

export default AddOcurrenceCommand;
