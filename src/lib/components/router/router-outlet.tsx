import * as React from 'react';
import { Component } from 'react';
import { UrlParser } from './url-parser';
import { UIRouterContext } from './router-context';

const parser = new UrlParser('./aaa/bbb;a=a/?b=&c=c#aa');

console.log(parser);

export class UIRouterOutlet extends Component {
  constructor(props: any, context: any) {
    super(props, context);
    console.log(this);
  }

  render() {
    return (
      <UIRouterContext.Consumer>
        {(context: any) => {
          console.log(context);
          return (
            <UIRouterContext.Provider value={this.props}>
              {this.props.children}
            </UIRouterContext.Provider>
          );
        }}
      </UIRouterContext.Consumer>
    );
  }
}