import React from 'react';
import PropTypes from 'prop-types';

function getDeviceType() {
  const u = navigator.userAgent;
  // android终端
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
  // ios终端
  const isIOS = /\(i[^;]+;( U;)? CPU.+Mac OS X/.test(u);

  if (isAndroid) {
    return 'android';
  }
  if (isIOS) {
    const screen = window.screen;
    if (screen.width === 375 && screen.height === 812 || screen.height === 375 && screen.width === 812) {
      return 'iphone-x';
    }
    return 'iphone';
  }
  return 'default';
}

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
      })
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