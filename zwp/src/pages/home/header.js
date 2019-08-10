import React, { Component,Fragment} from 'react'
import { Row, Col,Card,Statistic} from 'antd';
import { config,musiclist,songsheet,videolist,administrators,user} from "../../api"
export default class Header extends Component {
    constructor() {
        super()
        this.state={
            data:{}
        }
    }
    render() {
        let {data}=this.state
        console.log(data)
        return (
            <div style={{ background: '#ECECEC', padding: '5px' }}>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="在线歌曲" bordered={false}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Statistic title="非VIP歌曲" value={1128}/>
                                </Col>
                                <Col span={12}>
                                    <Statistic title="VIP歌曲" value={1128}  />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="热门歌单" bordered={false}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Statistic title="当前歌单" value={1}/>
                                </Col>

                            </Row>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="在线视频" bordered={false}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Statistic title="视频" value={30}/>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>

                <Row gutter={16} style={{"margin-top":"10px"}}>
                    <Col span={8}>
                        <Card title="注册用户" bordered={false}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Statistic title="普通用户" value={5}/>
                                </Col>
                                <Col span={12}>
                                    <Statistic title="会员用户" value={8}  />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="网站访问量" bordered={false}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Statistic title="PC访问量" value={5128}/>
                                </Col>
                                <Col span={12}>
                                    <Statistic title="移动访问量" value={2128}  />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="管理员用户" bordered={false}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Statistic title="控制员" value={2}/>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
    async componentDidMount() {
        let data={
            config:await config(),
            songsheetnum:await songsheet(),
            usernum: await user(),
            musicnum:await musiclist(),
            videonum:await videolist(),
            administratorsnum: await administrators()
        }
        this.setState({
            data:data
        })
    }
}
