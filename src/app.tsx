import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import './assets/scss/index.scss';

import { UIApp } from './lib/index';
import { routes } from './routing';

export class App extends Component {
  render() {
    return (
      <UIApp routes={routes}/>
    );
  }
}

render(<App/>, document.getElementById('app'));