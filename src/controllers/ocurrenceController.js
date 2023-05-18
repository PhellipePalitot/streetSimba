import OcurrenceService from "../services/ocurrenceService"

class OcurrenceController {
  
  getAllOcurrences(){
    return OcurrenceService.getAllOcurrences();
  }

  getOcurrence(ocurrence){
    return OcurrenceService.getOcurrence(ocurrence);
  }

  addOcurrence(autor, local, horario, data, descricao){
    OcurrenceService.addOcurrence(autor, local, horario, data, descricao);
  }

  deleteOcurrence(ocurrence){
    OcurrenceService.deleteOcurrence(ocurrence);
  }
  
}

export default new OcurrenceController()