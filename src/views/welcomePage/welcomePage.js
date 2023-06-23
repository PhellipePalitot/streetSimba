import React from "react";
import AbstractLayout from "../template/abstractLayout";
import OcurrenceForm from "./ocurrenceForm";
import { UserOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { Layout, Menu } from "antd";
import { Header, Footer } from "antd/es/layout/layout";

const { Title, Paragraph } = Typography;

class WelcomePage extends AbstractLayout {

  
  redirectTo = (url)=>{

    localStorage.clear()
    window.location.href = url;
  }

  handlingClick = (event) =>{
   
    this.redirectTo("/");
  }

  renderHeader(){
    const items = [
      {label: "Nome do usuário", key: "item-1", icon: <UserOutlined />,
       children: [{ label: 'Meu perfil', key: 'submenu-item-1' }, { label: 'Preferências', key: 'submenu-item-2' },{ label: 'Sair', key: 'submenu-item-1', onClick: this.handlingClick }]},
      {label: "Minhas ocorrências", key: "item-2"},
      {label: "Sugestões", key: "item-3"}
  
    ]

    return (
        
      <Layout>
        <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
          <div className="logo"/>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={items}
          />
        </Header>
      </Layout>
    )
  }

  renderMain(){
    return (
      <div>
        <Title level={1}>Bem-vindo!</Title>
        <Paragraph>Seu login foi realizado com sucesso!</Paragraph>
        <OcurrenceForm />
      </div>
    );
  }

  renderFooter(){
    return (
      <Layout>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Victoria Monteiro e Phellipe Palitot</Footer>
      </Layout>
    )
  }

}

export default WelcomePage;
