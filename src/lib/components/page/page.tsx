import * as React from 'react';
import { Component } from 'react';

export class UIPage extends Component {
    render() {
        return (
            <div className="ui-page">
                {this.props.children}
            </div>
        );
    }
}