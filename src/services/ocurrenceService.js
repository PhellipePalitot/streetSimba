import Ocurrence from "../models/ocurrence";
class OcurrenceService {

  constructor(){
    //Este constructor garante que a classe produza apenas uma instancia 
    //(Considere o array como uma database que só pode ser instanciada uma vez)
    if(OcurrenceService.Ocurrencelist){
      return OcurrenceService.Ocurrencelist;
    }

    this.Ocurrencelist = new Map();
    OcurrenceService.Ocurrencelist = this;
    return this;
  }
  
  getOcurrence(ocurrence){
    return this.Ocurrencelist[ocurrence];
  }

  getAllOcurrences(){
    return Array.from(this.Ocurrencelist);
  }

  addOcurrence(autor, local, horario, data, descricao){
    const ocurrence = new Ocurrence(autor, local, horario, data, descricao)
    this.ocurrence.add(ocurrence);
  }

  deleteOcurrence(ocurrence){
    this.Ocurrencelist.delete(ocurrence);
  }

}