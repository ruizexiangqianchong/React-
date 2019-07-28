import React from 'react'
import {Route} from "react-router-dom"

export default(routers)=>{
    let fn=function(item){
        if(item.children){
            fn(item.children)  //递归调用
        }else{
            return item.map((item,index)=>{
                return  <Route path={item.path} key={item.path} exact render={(props)=>{
                    return <item.component {...props}/>
        }}> 
                </Route>
            })
        }
    }
    //////
    return  routers.map((t,index)=>{
        if(t.children){
           return fn(t.children)
        }else{
            return  <Route path={t.path} exact  key={t.path}  render={(props)=>{
                return <t.component {...props}/>
    }}> 
            </Route>
        }
    })
}