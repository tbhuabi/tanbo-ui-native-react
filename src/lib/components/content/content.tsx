import * as React from 'react';
import { Component } from 'react';

export class UIContent extends Component {
  render() {
    return (
      <div className="ui-content">
        <div className="ui-content-shadow"/>
        <div className="ui-content-wrap">
          {this.props.children}
        </div>
      </div>
    );
  }
}