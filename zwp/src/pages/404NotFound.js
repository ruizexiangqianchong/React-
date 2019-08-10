import React, { Component } from 'react'
import  '@static/css/index.scss'
export default class NotFound extends Component {
    constructor(){
        super()
        console.log(404)
    }
    render() {
        return (
            <div>
                <img src={require('../static/img/404NotFound.gif')} className="notfound"></img>
            </div>
        )
    }
}
