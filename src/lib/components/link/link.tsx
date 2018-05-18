import * as React from 'react';
import { Component } from 'react';

import { Params, QueryParams } from '../router/router-help';
import { UIRouterContext, RouterContext } from '../router/router-context';

export class UILink extends Component<{ to: string, params?: Params, queryParams?: QueryParams}> {
  click(ev: any) {
    ev.preventDefault();
  }

  render() {
    return (
      <UIRouterContext.Consumer>
        {(context: RouterContext) => {
          const href = this.props.to;
          return (
            <a onClick={this.click} href={href} {...this.props}>{this.props.children}</a>
          )
        }}
      </UIRouterContext.Consumer>
    )
  }
}