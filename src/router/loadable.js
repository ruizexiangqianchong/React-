import Loadable from 'react-loadable';
import Loading from '@common/loading/loading.js';

const Login = Loadable({
    loader: () => import('@pages/login/login.js'), //loader的意思是你需要加载的组件
    loading: Loading, //Loading的意思是当你组件未被加载时显示的样子
});
const Music = Loadable({
    loader: () => import('@pages/AudioControl/music/music.js'),
    loading: Loading,
});
const User = Loadable({
    loader: () => import('@pages/user/user.js'),
    loading: Loading,
});
const Video = Loadable({
    loader: () => import('@pages/AudioControl/video/video.js'),
    loading: Loading,
});
const NotFound = Loadable({
    loader: () => import('@pages/404NotFound.js'),
    loading: Loading,
});

export {
    Login,Music,User,Video,NotFound
}