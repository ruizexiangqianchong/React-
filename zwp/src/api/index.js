import {fetch as fetchPolyfill} from 'whatwg-fetch'
import qs from "qs";
import actions from "redux-actions"
import http from "./http"
const config=()=>http.get("http://localhost:3000/config")
const musiclist=()=>http.get("http://localhost:3000/musiclist")
const songsheet=()=>http.get("http://localhost:3000/songsheet")
const videolist=()=>http.get("http://localhost:3000/videolist")
const administrators=()=>http.get("http://localhost:3000/administrators")
const user=()=>http.get("http://localhost:3000/user")
//修改当前歌曲是否为VIP
//"http://localhost:3000/musiclist?musicid="+id
//删除当前歌曲
const delnusic=()=>{
    http.Delete()
}

export  {
    //请求
    config,musiclist,songsheet,videolist,administrators,user,
    //方法

}