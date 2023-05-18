import React, { Component } from "react";
import ControllerFacade from "../facade/controllerFacade";
class OcurrenceForm extends Component{
  
  constructor(props){
    super(props);
    this.state = { autor: "", local: "", horario: "", data: "", descricao: "" }
  }
  
  handleAuthorChange = event => {
    this.setState({ autor: event.target.value })
  }
  
  handleLocalChange = event =>{
    this.setState({ local: event.target.value })
  }

  handleTimeChange = event =>{
    this.setState({ horario: event.target.value })
  }
  
  handleDateChange = event =>{
    this.setState({ data: event.target.value })
  }

  handleDescriptionChange = event =>{
    this.setState({ descricao: event.target.value })
  }

  handleAddOcurrence =  event => {
    event.preventDefault();
    const { autor, local, horario, data, descricao } = this.state;
    
    ControllerFacade.addOcurrence(autor, local, horario, data, descricao);
  }

  handleListOcurrence = event =>{
    const ocurList = ControllerFacade.getAllOcurrences();
    return ocurList;
  }

  render(){
    const { autor, local, horario, data, descricao } = this.state;
    let ocurList = this.handleListOcurrence();

    return (
      <div>
        <form onSubmit={this.handleAddOcurrence}>
          <div>
            <label htmlFor="autor">Autor:</label>
            <input type="text" name="autor" value={autor} onChange={this.handleAuthorChange} />
          </div>
          <div>
            <label htmlFor="local">Local da Ocorrência:</label>
            <input type="text" name="local" value={local} onChange={this.handleLocalChange} />
          </div>
          <div>
            <label htmlFor="horario">Horário da Ocorrência:</label>
            <input type="time" name="horario" value={horario} onChange={this.handleTimeChange} />
          </div>
          <div>
            <label htmlFor="data">Data da Ocorrência:</label>
            <input type="date" name="data" value={data} onChange={this.handleDateChange} />
          </div>
          <div>
            <label htmlFor="descricao">Descrição da Ocorrência:</label>
            <textarea rows="4" cols="50" name="descricao" value={descricao} onChange={this.handleDescriptionChange} />
          </div>
          
          <button type="submit">Cadastrar Ocorrência</button>
        </form>
      
        <hr />
        <h2> Lista de Ocorrências: </h2>
        <ul>
          {ocurList.map((ocur, index) => (
            <li key={index}>
              Ocorrência: {ocur.descricao} - Local: {ocur.local} - Data: {ocur.data} - Horário: {ocur.horario}
            </li>
          ))}
        </ul>
        
      </div>
    );
  }
}

export default OcurrenceForm;