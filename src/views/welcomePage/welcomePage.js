import React, { Component } from "react";
import { Typography } from "antd";
import OcurrenceForm from "./ocurrenceForm";

const { Title, Paragraph } = Typography;

class WelcomePage extends Component {
  render() {
    return (
      <div>
        <Title level={1}>Bem-vindo!</Title>
        <Paragraph>Seu login foi realizado com sucesso!</Paragraph>
        <OcurrenceForm />
      </div>
    );
  }
}

export default WelcomePage;
