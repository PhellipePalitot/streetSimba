import Ocurrence from "../models/ocurrence";
import { v4 as uuidv4 } from 'uuid';
class OcurrenceService {

  constructor(){
    
    this.Ocurrencelist = new Map();
  }
  
  getOcurrence(ocurrence){
    return this.Ocurrencelist[ocurrence];
  }

  getAllOcurrences() {
    return Array.from(this.Ocurrencelist.values());
  }

  addOcurrence(autor, local, horario, data, descricao){
    const ocurrence = new Ocurrence(autor, local, horario, data, descricao)
    this.Ocurrencelist.set(uuidv4(), ocurrence);
  }

  deleteOcurrence(ocurrence) {
    const keyToDelete = Array.from(this.Ocurrencelist.keys()).find(key => this.Ocurrencelist.get(key) == ocurrence);
    if (keyToDelete) {
      this.Ocurrencelist.delete(keyToDelete);
    }
  }

}

export default new OcurrenceService();