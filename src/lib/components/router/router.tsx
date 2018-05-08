import * as React from 'react';
import { Component } from 'react';

import { Routes } from './router-base';

export class UIRouter extends Component<{routes: Routes, baseUrl?: string}> {
  render() {
    return (
      <div className="ui-page">
        {React.createElement(this.props.routes[0].component, {})}
      </div>
    );
  }
}