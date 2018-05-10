import * as React from 'react';
import { Component } from 'react';
import { UIRouterContext } from './router-context';

export class UIRouterOutlet extends Component {
  render() {
    return (
      <UIRouterContext.Consumer>
        {(context: any) => {
          console.log(context);
          return (
            <UIRouterContext.Provider value={this.props}>
              {context.component ? React.createElement(context.component) : ''}
            </UIRouterContext.Provider>
          );
        }}
      </UIRouterContext.Consumer>
    );
  }
}