import * as React from 'react';
import { Component } from 'react';

export class UITitle extends Component {
  render() {
    return (
      <div className="ui-title">
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}