import React, { Component } from "react";
import OcurrenceForm from "./ocurrenceForm";

class WelcomePage extends Component{

  render() {
    return (
      <div>
        <h1>Bem-vindo!</h1>
        <p>Seu login foi realizado com sucesso!</p>
        <OcurrenceForm/>
      </div>
    )
  }
}

export default WelcomePage;