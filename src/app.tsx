import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import 'normalize.css';
import './assets/scss/index.scss';

import { UIApp } from './lib/index';

import { Home } from './views/home';
import { List } from './views/list';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <UIApp>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/list" component={List}/>
            <Redirect to="/home"/>
          </Switch>
        </UIApp>
      </BrowserRouter>
    );
  }
}

render(<App/>, document.getElementById('app'));