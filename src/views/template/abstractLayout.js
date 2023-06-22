import React, { Component } from "react";

class AbstractLayout extends Component{


    renderHeader(){
        return null;
    }

    renderFooter(){
        return null;
    }

    renderSideBar(){
        return null;
    }

    renderMain(){
        return null;
    }

    render(){
        return(
            <div className="layout">
                <div className="header">{this.renderHeader()}</div>
                <div className="sidebar">{this.renderSideBar()}</div>
                <div className="main">{this.renderMain()}</div>
                <div className="footer">{this.renderFooter()}</div>         
            </div>
        )
    }
}

export default AbstractLayout;