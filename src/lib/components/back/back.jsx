import React from 'react';
import PropTypes from 'prop-types';

import { AppContext } from '../app/app';

export class UIBack extends React.Component {
  constructor() {
    super();
    this.state = {
      translate: '',
      opacity: ''
    };
  }

  back() {
    window.history.back();
  }

  render() {
    return (
      <div className="ui-back" onClick={this.back}>
        <div className="ui-back-wrap">
          <div className="ui-back-icon">
            <AppContext.Consumer>
              {
                context => (<div className={context.uiBackIcon}/>)
              }
            </AppContext.Consumer>
            {this.props.icon}
          </div>
          <div
            className="ui-back-text"
            style={{
              transform: this.state.translate,
              WebkitTransform: this.state.translate,
              opacity: this.state.opacity
            }}
          >
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

UIBack.defaultProps = {
  children: '',
  icon: ''
};

UIBack.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string
};