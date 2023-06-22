import React from "react"
import LoginForm from "./LoginForm";
import AbstractLayout from "../template/abstractLayout";
import { Layout, Menu } from "antd";
import { Header, Footer } from "antd/es/layout/layout";

class LoginPage extends AbstractLayout {

  renderHeader(){
    
    const items = [
      {label: "Sobre nós", key: "item-1"},
      {label: "Contato", key: "item-2"},
      {label: "Suporte", key: "item-3"}
    ]

    return (
        
      <Layout>
        <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
          <div className="logo" />
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
      <LoginForm  handleLogin={this.handleLogin}/>
    )
  }

  renderFooter(){
      return (
        <Layout>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Victoria Monteiro e Phellipe Palitot</Footer>
        </Layout>
      )
        
  }

}

export default LoginPage;