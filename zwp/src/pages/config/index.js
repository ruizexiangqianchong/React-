import React, { Component } from 'react'
import { Input,Row,Menu,Col,Select,Button,Upload,Icon } from 'antd';
export default class Music extends Component {
    render() {
        const { TextArea } = Input;
        const { Option } = Select;
        const selectBefore = (
            <Select defaultValue="Http://" style={{ width: 90 }}>
                <Option value="Http://">Http://</Option>
                <Option value="Https://">Https://</Option>
            </Select>
        );
        const selectAfter = (
            <Select defaultValue=".com" style={{ width: 80 }}>
                <Option value=".com">.com</Option>
                <Option value=".jp">.jp</Option>
                <Option value=".cn">.cn</Option>
                <Option value=".org">.org</Option>
            </Select>
        );
        return (
            <div>
                <Row gutter={24}>
                    <Col span={8}>

                        <div style={{ marginBottom: 24 }}>
                            <Input placeholder="Basic usage" addonBefore="网站标题"/>
                        </div>
                    </Col>
                </Row>
                <Row gutter={24}>
                <Col span={14}>
                    <div style={{ marginBottom: 16 }}>
                        <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite"/>
                    </div>
                </Col>
                    <Col span={10}>
                        <Button type="primary">新增网站域名</Button>
                    </Col>

            </Row>
                <Row gutter={24} style={{ marginBottom: 16 }}>
                    <Col span={12}>
                        <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" directory>
                            <Button>
                                <Icon type="upload" /> 上传网站logo
                            </Button>
                        </Upload>
                        <Input placeholder="图片路径"/>
                    </Col>
                </Row>
                <Row gutter={24} style={{ marginBottom: 16 }}>
                    <Col span={12}>
                        网站描述
                        <TextArea rows={4}/>
                    </Col>
                </Row>
            </div>
        )
    }
}
