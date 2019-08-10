import Loadable from 'react-loadable';
import Loading from '@common/loading/loading.js';
//登陆
const Login = Loadable({
    loader: () => import('@pages/login/login.js'),
    loading: Loading,
});
//首页
const Home = Loadable({
    loader: () => import('@pages/home/index.js'),
    loading: Loading,
});
//音乐页面
const Music = Loadable({
    loader: () => import('@pages/AudioControl/music/index.js'),
    loading: Loading,
});
//用户页面
const User = Loadable({
    loader: () => import('@pages/user/user.js'),
    loading: Loading,
});
//视频页面
const Video = Loadable({
    loader: () => import('@pages/AudioControl/video/video.js'),
    loading: Loading,
});
//网站基本信息
const Config = Loadable({
    loader: () => import('@pages/config'),
    loading: Loading,
});
//数据采集
const Collection= Loadable({
    loader: () => import('@pages/collection'),
    loading: Loading,
});
//采集音乐数据
const Collectionmusic= Loadable({
    loader: () => import('@pages/collection/music'),
    loading: Loading,
});
//采集视频数据
const Collectionvideo=Loadable({
    loader: () => import('@pages/collection/video'),
    loading: Loading,
});
//活动activity
const Activity= Loadable({
    loader: () => import('@pages/activity'),
    loading: Loading,
});
//404页面
const NotFound = Loadable({
    loader: () => import('@pages/404NotFound.js'),
    loading: Loading,
});

export {
    Login,Music,User,Video,NotFound,Home,Config,Collection,Activity,Collectionmusic,Collectionvideo
}