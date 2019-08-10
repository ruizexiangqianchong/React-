import React, { Component } from 'react'
import { Table ,Switch, Icon} from 'antd';
import http from "./../../../api/http"
import "@static/css/audiocontrol.scss"
export default class Music extends Component {
    constructor() {
        super()
        this.state= {
            data:[]
        }
    }
    render() {
        let {data}=this.state
        console.log(data)
        const columns = [
            {
                key:1,
                title: '歌曲名字',
                dataIndex: 'musicname',
                render: text => <a href="javascript:;">{text}</a>,
            },
            {
                key:2,
                title: '歌曲封面',
                dataIndex: 'musicimgsrc',
                render: musicimgsrc => <img src={musicimgsrc} alt=""/>,
            },
            {
                key:3,
                title: '歌手',
                dataIndex: 'musicauthor',
            },
            {
                key:4,
                title: '上架/下架',
                dataIndex: 'musichide',
                render: text =><Switch checkedChildren="开" unCheckedChildren="关" defaultChecked={text}/>,
            },
            {
                key:5,
                title: 'VIP',
                dataIndex: 'musicvip',
                render: (text,record) => <Switch
                    checkedChildren={<Icon type="check" />}
                    unCheckedChildren={<Icon type="close" />}
                    defaultChecked={text}
                    onClick={this.mfystate.bind(this,record)}
                />,
            },
            {
                key:6,
                title: '歌曲热度',
                dataIndex: 'userlike',
            },
            {
                key:7,
                title: '操作',
                dataIndex: 'userlike',
                render: (text,record) => <a href="javascript:;" onClick={this.musicdel.bind(this,record)}>删除</a>,
            },
        ];
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User',
                name: record.name,
            }),
        };
        return (
            <div className="musiclist">
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
            </div>
        )
    }
    componentWillMount() {
        http.get("http://localhost:3000/musiclist").then((res)=>{
           this.setState({
               data:res
           })
        })
    }
    musicdel(record){
        console.log(record)
    }
    mfystate(bool,record){
        //调用修改请求

console.log(bool,record)
    }
}
