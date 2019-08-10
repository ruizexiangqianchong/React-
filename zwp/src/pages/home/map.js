import React, { Component,Fragment } from 'react'
import { Map,Marker } from 'react-amap';


export default class home extends Component {
    constructor(){
        super();
        this.toolEvents = {
            created: (tool) => {
                this.tool = tool;
            }
        }
        this.mapPlugins = ['ToolBar'];
        this.mapCenter = {longitude: 120, latitude: 35};
        this.markerPosition = {longitude: 121, latitude: 36};
    }
    render() {


        return (
            <Fragment>
                <h2>公司地址</h2>
                <div style={{width: '100%', height: '400px'}}>
                    <Map amapkey={'95f7f16aac85f98ae2d0cf42950fcefd'}
                         plugins={this.mapPlugins}
                         center={this.mapCenter}
                         zoom={6}
                    >
                        <Marker position={this.markerPosition} />
                        </Map>

                </div>
            </Fragment>
        )
    }

}
