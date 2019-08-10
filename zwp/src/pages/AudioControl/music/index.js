import React, { Component } from 'react'
import Musiclist from "./musiclist"
import Musicsearch from "./musicsearch"
import {fetch as fetchPolyfill} from 'whatwg-fetch'
export default class Music extends Component {
    render() {
        return (
            <div>
                <Musicsearch/>
                <Musiclist/>
            </div>
        )
    }
}
