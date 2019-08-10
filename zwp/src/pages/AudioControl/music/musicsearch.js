import React, { Component } from 'react'
import { Input,Row,Menu, Dropdown, Icon,Col  } from 'antd';
export default class Music extends Component {

    render() {
        const { Search } = Input;
        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                        按播放次数
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                        按用户收藏
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                        按上架时间
                    </a>
                </Menu.Item>
            </Menu>
        );
        return (
            <div>
                <Row gutter={24}>
                    <Col span={8}>
                        <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
                    </Col>
                    <Col span={6}>
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" href="#">
                                选择排序<Icon type="down" />
                            </a>
                        </Dropdown>
                    </Col>
                </Row>

            </div>
        )
    }
}
