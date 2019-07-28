import React, { Component } from 'react'
import { Menu, Icon, Switch } from 'antd';
import {LayoutComponent} from '@router/index.js'
import menuEatch from '@utils/menuEatch.js'
import {withRouter} from "react-router-dom" 



 class Menus extends Component {
    constructor() {
        super()
    }
    state = {
        theme: 'dark',
        current: '1',
    };

    changeTheme = value => {
        this.setState({
            theme: value ? 'dark' : 'light',
        }, () => {
            this.props.onChangetheme(this.state.theme)
        });

    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
        this.props.history.push(e.key)
    };
    render() {
        return (
            <div>
                <Switch
                    checked={this.state.theme === 'dark'}
                    onChange={this.changeTheme}
                    checkedChildren="Dark"
                    unCheckedChildren="Light"
                />
                <br />
                <br />
                <Menu
                    theme={this.state.theme}
                    onClick={this.handleClick.bind(this)}

                    defaultOpenKeys={['sub1']}
                    selectedKeys={[this.state.current]}
                    mode="inline"
                >
                  { menuEatch(LayoutComponent)}
                </Menu>
            </div>


        )
    }
}

export default withRouter(Menus)


