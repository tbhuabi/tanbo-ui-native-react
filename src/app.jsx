import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import 'normalize.css';
import './assets/scss/index.scss';

import { UIApp } from './lib/index';

import { Home } from './views/home';
import { List } from './views/list';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <UIApp>
          <Switch key={window.location.pathname} location={window.location}>
            <Route path="/home" component={Home}/>
            <Route path="/list" component={List}/>
            <Redirect to="/home"/>
          </Switch>
        </UIApp>
      </BrowserRouter>
    );
  }
}

ReactDom.render(<App/>, document.getElementById('app'));