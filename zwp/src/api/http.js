import {fetch as fetchPolyfill} from 'whatwg-fetch'
import qs from "qs";


const get = (url)=>{
   var result =  fetchPolyfill(url,{
       //允许携带cookie
       credentials: 'include',
       headers:{
           "content-type":"application/json"
       }
   })
    .then(res=>res.json())

    return result;
}

const post = (url,data)=>{
    var result = fetchPolyfill(url,{
        method:"POST",
        credentials: 'include',
        body:qs.stringify(data),
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res=>res.json)

    return result;
}
const Delete = (url,data)=>{
    var result = fetchPolyfill(url,{
        method:"delete",
        credentials: 'include',
        body:qs.stringify(data),
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res=>res.json)

    return result;
}

export default {
    get,
    post,
    Delete
}