import ControllerFacade from "../facade/controllerFacade";

class Proxy {

    getAllOcurrences() {
        if(localStorage.getItem("role") === "admin"){

            return ControllerFacade.getAllOcurrences();
        }else if(localStorage.getItem("role") === "user"){

            const allOcur = ControllerFacade.getAllOcurrences();
            let filtered = [];
            
            allOcur.forEach((item)=>{
                const {  descricao, local,  data, horario } = item;
                
                const itemFiltered = { descricao, local,  data, horario };
                 filtered.push(itemFiltered)
            });

            return filtered;
        }
        
      }
    
      getOcurrence(ocurrence) {

        if(localStorage.getItem("role") === "admin"){

            return ControllerFacade.getOcurrence(ocurrence);

        }else if(localStorage.getItem("role") === "user"){

            const ocur = ControllerFacade.getOcurrence(ocurrence);
            
            const {  descricao, local,  data, horario } = ocur;
            
            const itemFiltered = { descricao, local,  data, horario };
                
            return itemFiltered;
        }
      }
    
      addOcurrence(autor, local, horario, data, descricao) {
        ControllerFacade.addOcurrence(autor, local, horario, data, descricao);
      }
    
      deleteOcurrence(ocurrence) {
        ControllerFacade.deleteOcurrence(ocurrence);
      }
    
      signInUser(login, senha, tipo) {
          return ControllerFacade.signInUser(login, senha, tipo);
      }
    
      addUser(login, senha, tipo) {
          ControllerFacade.addUser(login, senha, tipo);
    
      }
    
      signInAdmin(login, senha) {
          return ControllerFacade.signInAdmin(login, senha);
      }
    
      addAdmin(login, senha) {
          ControllerFacade.addAdmin(login, senha);
      }
    
      getAllUsers() {
        if(localStorage.getItem("role") === "admin"){

            return ControllerFacade.getAllUsers();

        }else if(localStorage.getItem("role") === "user"){                

            return "Permissão negada!";
        }
        
      }

      executeCommand(command) {
        ControllerFacade.executeCommand(command);
      }
}

export default new Proxy();