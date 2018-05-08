import * as React from 'react';
import { Component } from 'react';

export interface UIRoute {
  path: string;
  component: any | Promise<any>;
  children?: UIRoutes;
}

export declare type UIRoutes = UIRoute[];

export class UIRouter extends Component<{routes: UIRoutes, baseUrl?: string}> {
  render() {
    return (
      <div className="ui-page">
        {React.createElement(this.props.routes[0].component, {})}
      </div>
    );
  }
}