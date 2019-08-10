import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon,Avatar } from 'antd';
import Menus from './Menu.js'
import Nav from "./header"
import "@static/css/header.scss"

const { Header, Content, Sider,Footer } = Layout;


export default class LayoutCom extends Component {
  state = {
    collapsed: false,
    theme:"dark"
  };
  onChangetheme(type){  //点击更换主题
    this.setState({
        theme:type
    })
  }
  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  render() {
    return (
      <div>
        <Layout style={{ minHeight: '100vh' }} >
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} theme={this.state.theme}>
          <div className="logo" />
         
         <Menus onChangetheme={this.onChangetheme.bind(this)}></Menus>

        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} >
              <div className="index-header">
                  <div  className="index-header-h1">
                      <h1>欢迎进入网易后台管理系统</h1>
                  </div>
                  <div className="index-header-user"> <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  </div>
                  <div className="index-header-user"><Nav></Nav></div>
              </div>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>网易后台系统</Footer>
        </Layout>
      </Layout>
      </div>
    )
  }
}
