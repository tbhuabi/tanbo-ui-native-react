import * as React from 'react';
import { Component } from 'react';

export class UIHeader extends Component {
  render() {
    return (
      <div className="ui-header">
        {this.props.children}
      </div>
    );
  }
}