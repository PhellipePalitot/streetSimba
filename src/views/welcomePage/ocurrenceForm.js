import React, { Component } from "react";
import { Form, Input, Button, DatePicker, TimePicker, List, Popconfirm } from "antd";
import ControllerFacade from "../facade/controllerFacade";
import AddOcurrenceCommandService from "../../services/AddOcurrenceCommandService";
import DeleteOcurrenceCommandService from "../../services/DeleteOcurrenceCommandService";

const { TextArea } = Input;

class OcurrenceForm extends Component {
  formRef = React.createRef();

  state = {
    ocurrences: []
  };

  handleAddOcurrence = (values) => {
    const { autor, local, horario, data, descricao } = values;
    const command = new AddOcurrenceCommandService(autor, local, horario.format("HH:mm"), data.format("YYYY-MM-DD"), descricao);
    ControllerFacade.executeCommand(command);
    this.formRef.current.resetFields();
    const ocurrences = ControllerFacade.getAllOcurrences();
    this.setState({ ocurrences });
  };

  handleRemoveOcurrence = (ocurrence) => {
    const command = new DeleteOcurrenceCommandService(ocurrence);
    ControllerFacade.executeCommand(command);
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

