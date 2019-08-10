import React, { Component } from 'react'
import ReactDOM from "react-dom";
import { Row, Col,Card } from 'antd';
import Header from "./header"
import Imgbar from "./imgbar"
import { config,musiclist,songsheet,videolist,administrators,user} from "../../api"
import Map from "./map"
export default class home extends Component {
    constructor() {
        super()
        this.state={
            data:{}
        }
    }
    render() {
        let {data}=this.state

        return (
            <div>
                <Header/>
                <Imgbar></Imgbar>
                <Map></Map>
            </div>
        )
    }

}
