import Ocurrence from "../models/ocurrence";
class OcurrenceService {

  constructor(){
    
    this.Ocurrencelist = new Map();
  }
  
  getOcurrence(ocurrence){
    return this.Ocurrencelist[ocurrence];
  }

  getAllOcurrences(){
    return Array.from(this.Ocurrencelist);
  }

  addOcurrence(autor, local, horario, data, descricao){
    const ocurrence = new Ocurrence(autor, local, horario, data, descricao)
    this.Ocurrencelist.set(ocurrence);
  }

  deleteOcurrence(ocurrence){
    this.Ocurrencelist.delete(ocurrence);
  }

}

export default new OcurrenceService();