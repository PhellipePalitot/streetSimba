import AddOcurrenceCommand from "./AddOcurrenceCommandService";
import DeleteOcurrenceCommand from "./DeleteOcurrenceCommandService";

export default class CommandFactory {
    static createAddOcurrenceCommand(autor, local, horario, data, descricao) {
      return new AddOcurrenceCommand(autor, local, horario, data, descricao);
    }
  
    static createDeleteOcurrenceCommand(ocurrence) {
      return new DeleteOcurrenceCommand(ocurrence);
    }
  }
  