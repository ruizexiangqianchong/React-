import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Menus from './Menu.js'

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
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
      </div>
    )
  }
}
