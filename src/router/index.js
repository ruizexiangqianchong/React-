import {Login,Music,User,Video,NotFound} from './loadable.js'

export const LayoutComponent=[
    {
        path:"/user",
        component:User,
        meta:{},
        name:"用户",
        type:"user",
        key:"/user",
    },
    {
        meta:{},
        name:"管理影音",
        type:"database",
        children:[
            {
                path:"/audioControl/music",
                meta:{},
                component:Music,
                name:"管理音频",
                type:"play-square",
                key:"/audioControl/music",
            },
            {
                path:"/audioControl/video",
                meta:{},
                type:"customer-service",
                component:Video,
                name:"管理视频",
                key:"/audioControl/video",
            }
        ]
    },
]


export const NoLayoutComponent =[
    {
        path:"/login",
        meta:{},
        component:Login,
        name:"管理视频",
        key:"/login",
    }
]

export const NotFoundPages=
    {
        path:"/404",
        meta:{},
        component:NotFound,
        name:"哦,没有找到页面!",
        key:"/404",
    }
