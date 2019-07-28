import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import store from './store/index.js'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route, Link, Switch, NavLink, Redirect } from "react-router-dom"  //选择模式可以在引入时设置
import { NoLayoutComponent, NotFoundPages } from './router/index.js'
import routerEatch from './utils/routerEatch.js'
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                
                //不带layout
                {routerEatch(NoLayoutComponent)}
                //带layout
                <Route path="/"  render={()=>{
                    return <App/>
                }}/>
                  //404页面
                <Route path={NotFoundPages.path} key={NotFoundPages.path}  render={(props) => {return <NotFoundPages.component {...props} />  }}>
                </Route>
                <Redirect to="/404"></Redirect>
                
            </Switch>
        </Router>
    </Provider>



    , document.getElementById('root'));

