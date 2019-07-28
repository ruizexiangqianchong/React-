import React from 'react';
import ReactDOM from 'react-dom';
import LayoutCom from '@layout/index.js'
import { LayoutComponent , NotFoundPages} from './router/index.js'
import { HashRouter as Router, Route, Link, Switch, NavLink, Redirect } from "react-router-dom"  //选择模式可以在引入时设置
import routeEatch from './utils/routerEatch.js'
// console.log(LayoutComponent)
// console.log(routeEatch(LayoutComponent))
function App() {
  return (
    <LayoutCom>
      <Switch>
        <Redirect from='/' exact to='/user'></Redirect>
        {routeEatch(LayoutComponent)}
        <Redirect to="/404"></Redirect>
      </Switch>
    </LayoutCom>

  );
}

export default App;
