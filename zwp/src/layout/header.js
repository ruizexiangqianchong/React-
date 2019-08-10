import React, { Component } from 'react'
import { Menu, Dropdown, Icon } from 'antd';
export default class LayoutCom extends Component {

    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                        用户名：admin
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                        类型：超级管理员
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                        退出登陆
                    </a>
                </Menu.Item>
            </Menu>
        );
        return (
            <div>
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" >
                        admin <Icon type="down" />
                    </a>
                </Dropdown>
            </div>
        )
    }
}
