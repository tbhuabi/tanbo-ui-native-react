import * as React from 'react';
import { Component } from 'react';

export class UINavbar extends Component {
  render() {
    return (
      <div className="ui-navbar">
        {this.props.children}
      </div>
    );
  }
}