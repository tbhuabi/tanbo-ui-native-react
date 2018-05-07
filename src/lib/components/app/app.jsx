import React from 'react';
import PropTypes from 'prop-types';

import { getDeviceType } from './get-device-type';

export const AppContext = React.createContext();

export class UIApp extends React.Component {
  constructor() {
    super();
    this.state = {
      deviceType: getDeviceType()
    };
    window.addEventListener('resize', () => {
      this.setState({
        deviceType: getDeviceType()
      });
    });
  }

  get className() {
    return 'ui-app ' + this.state.deviceType;
  }

  render() {
    return (
      <div className={this.className}>
        <AppContext.Provider
          value={{
            uiBackIcon: this.props.uiBackIcon
          }}
        >
          {this.props.children}
        </AppContext.Provider>
      </div>
    );
  }
}

UIApp.defaultProps = {
  children: '',
  uiBackIcon: 'ui-icon-arrow-back'
};

UIApp.propTypes = {
  children: PropTypes.node,
  uiBackIcon: PropTypes.string
};