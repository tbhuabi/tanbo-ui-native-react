import * as React from 'react';
import { Component } from 'react';

// import { UIRouterContext } from '../router/router-context';

export class UILink extends Component<{ to: string }> {
  constructor(props: any, context: any) {
    super(props, context);
    console.log(props, context);
  }

  click(ev: any) {
    ev.preventDefault();
  }

  render() {
    return (
      <a onClick={this.click}>{this.props.children}</a>
    )
  }
}