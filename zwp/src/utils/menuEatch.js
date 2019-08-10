import React, { Component } from 'react'
import { Menu, Icon, Switch } from 'antd';
const { SubMenu } = Menu;

export default (data) => {
    return data.map((t, index) => {
        let  fn= function(childer){
            if(childer){
                if(childer.children){
                    fn(childer.children)
                   }
               return  <SubMenu  
                        key={t.key}
                        title={
                            <span>
                                <Icon type={t.type} />
                                <span>{t.name}</span>
                            </span>
                        }
                    >
                      {
                          t.children.map((t,index)=>{
                          return  <Menu.Item key={t.key}>
                                 <Icon type={t.type} />           
                            <span>{t.name}</span>
                            </Menu.Item>
                          })
                      }
                    </SubMenu>
            }
            
        }

        if (t.children) {
            //console.log(t.children)
           return fn(t.children)

        } else {
            return <Menu.Item key={t.key}>
                   <Icon type={t.type} />
                <span>{t.name}</span>
            </Menu.Item>
        }
    })

}








// // 递归右侧菜单
// export default (router) => {
//     let arr=router.map((item) => {

//         let fn=(children)=>{
//             if(children){
//                 if(children.childer){
//                     fn(children.childer)
//                 }
//                 return <SubMenu
//                     key={item.key}
//                     title={
//                         <span>
//                             <Icon type="setting" />
//                             <span>{item.name}</span>
//                         </span>
//                     }
//                 >
//                     {item.children.map((item1)=>{
//                         return <Menu.Item key={item1.key}>{item1.name}</Menu.Item>
//                     })}
//                 </SubMenu>
//             }
//         }

//         if (item.children) {
//             return fn(item.children)
//         } else {
//             return<Menu.Item key={item.key}>
//                 <Icon type="pie-chart" />
//                 <span>{item.name}</span>
//             </Menu.Item>
//         }

//     })
//     return arr
// }





// export default (data) => {

//     let fn = function (item) {

//         return    <SubMenu  
//                        key={item.key}
//                        title={
//                            <span>
//                                {/* <Icon type={item.type} /> */}
//                                <span>{item.name}</span>
//                            </span>
//                        }
//                    >
//                      {
//                          item.children.map((t,index)=>{
//                          return  <Menu.Item key={t.key}>           
//                            <span>{t.name}</span>
//                            </Menu.Item>
//                          })
//                      }
//                    </SubMenu>


//        }

//    return data.map((t,index)=>{

//         if (t.children) {
//           return fn(t)
//        }else{

//         return  <Menu.Item key={t.key}>           
//                <span>{t.name}</span>
//                </Menu.Item>


//        }
//    })




