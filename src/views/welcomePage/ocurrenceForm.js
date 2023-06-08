/*import React, { Component } from "react";
import controllerFacade from "../facade/controllerFacade";
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
    const { autor, local, horario, data, descricao} = this.state;
    
    ControllerFacade.addOcurrence(autor, local, horario, data, descricao);
    console.log(controllerFacade.getAllOcurrences())
  }

  /*handleListOcurrence(){
    
    const ocurList = this.state;
    ocurList = ControllerFacade.getAllOcurrences();

    ocurList.map((index, ocu) => {
      return (<li key={index}> Ocorrência: {ocur.descricao} - Local: {ocur.local} - Data: {ocur.data} - Horário: {ocur.horario}</li>)
    }
  }*/
  
 
/*
  render(){
    const { autor, local, horario, data, descricao} = this.state;
    
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
        <ul>{this.handleListOcurrence}</ul>
        
      </div>
    );
  }
}

export default OcurrenceForm; */
import React, { Component } from "react";
import { Form, Input, Button, DatePicker, TimePicker, List, Popconfirm } from "antd";
import ControllerFacade from "../facade/controllerFacade";

const { TextArea } = Input;

class OcurrenceForm extends Component {
  formRef = React.createRef();

  state = {
    ocurrences: []
  };

  handleAddOcurrence = (values) => {
    const { autor, local, horario, data, descricao } = values;
    ControllerFacade.addOcurrence(autor, local, horario.format("HH:mm"), data.format("YYYY-MM-DD"), descricao);
    this.formRef.current.resetFields();
    const ocurrences = ControllerFacade.getAllOcurrences();
    this.setState({ ocurrences });
  };

  handleRemoveOcurrence = (index) => {
    ControllerFacade.deleteOcurrence(index);
    const ocurrences = ControllerFacade.getAllOcurrences();
    this.setState({ ocurrences });
  };

  render() {
    const { ocurrences } = this.state;

    return (
      <div>
        <Form ref={this.formRef} onFinish={this.handleAddOcurrence}>
          <Form.Item label="Autor" name="autor" rules={[{ required: true, message: "Campo obrigatório" }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Local da Ocorrência" name="local" rules={[{ required: true, message: "Campo obrigatório" }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Horário da Ocorrência" name="horario" rules={[{ required: true, message: "Campo obrigatório" }]}>
            <TimePicker format="HH:mm" />
          </Form.Item>
          <Form.Item label="Data da Ocorrência" name="data" rules={[{ required: true, message: "Campo obrigatório" }]}>
            <DatePicker format="DD-MM-YYYY" />
          </Form.Item>
          <Form.Item label="Descrição da Ocorrência" name="descricao" rules={[{ required: true, message: "Campo obrigatório" }]}>
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Cadastrar Ocorrência
            </Button>
          </Form.Item>
        </Form>

        <hr />
        <h2>Lista de Ocorrências:</h2>
        <List>
          {ocurrences.map((ocur, index) => (
            <List.Item key={index}>
              Autor: {ocur.autor} - Ocorrência: {ocur.descricao} - Local: {ocur.local} - Data: {ocur.data} - Horário: {ocur.horario}
              <Popconfirm
                title="Tem certeza que deseja excluir esta ocorrência?"
                onConfirm={() => this.handleRemoveOcurrence(ocur)}
                okText="Sim"
                cancelText="Não"
              >
                <Button type="link" danger>
                  Excluir
                </Button>
              </Popconfirm>
            </List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default OcurrenceForm;

