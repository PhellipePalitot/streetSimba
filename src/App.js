import React, { Component } from "react";
import SinglePage from "./views/singlePage/singlePage";


class App extends Component {
  render() {
    return (
      <div>
      
       {SinglePage.renderPage()}
        
      </div>
    )
  }
}

export default App;
