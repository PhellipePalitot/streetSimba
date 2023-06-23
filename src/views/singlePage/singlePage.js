import LoginPage from "../loginPage/LoginPage.js"
import WelcomePage from "../welcomePage/welcomePage.js"

class SinglePage {

  constructor(){
    //Adicione aqui as instâncias de todas as páginas
    this.LoginPage = new LoginPage();
    this.WelcomePage = new WelcomePage();
  }

  renderPage(){
    const url = window.location.pathname;
    console.log("URL:" + url);
    if (url === "/"){
    
      return this.LoginPage.render();
    }else if (url === "/welcome"){
      
      return this.WelcomePage.render();
    }else{
    
      return "Page not found!";
    }

  }
  
}

const instance = new SinglePage();

export default instance;