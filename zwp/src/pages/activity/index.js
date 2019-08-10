import React, { Component,Fragment } from 'react'
import { Card,Icon, Avatar} from 'antd';
import "./index.scss"
import http from "./../../api/http"
export default class Axtivity extends Component {
    constructor(){
        super()
        this.state={
            data:{

            }
        }
    }
    render() {
        let {banner}=this.state.data
        const { Meta } = Card;
        return (
            <Fragment>
                <h2>管理轮播图</h2>
            <div className="admin-lbt" >
                {
                    banner?
                    banner.map((item,index)=>(


                        <Card

                        style={{ width: 300, marginLeft:10,marginBottom:10}}
                        hoverable
                        cover={<img alt="example" src={item.bannerpic}/>}
                    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                    >
                    <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={item.bannerTitle}
                    description={item.explain}
                    />
                    </Card>
                    )):""
                }
            </div>
            </Fragment>
        )
    }
    componentWillMount() {
        http.get("http://localhost:3000/config").then((res)=>{
            this.setState({
                data:res
            })
        })
    }
}
