import * as React from 'react';
import { createContext, Component } from 'react';

import { getDeviceType } from './get-device-type';

export interface UIAppProps {
  uiBackIcon: string;
}

const props: UIAppProps = {
  uiBackIcon: 'ui-icon-arrow-back'
};
export const AppContext = createContext(props);

export class UIApp extends Component {
  state = {
    deviceType: getDeviceType()
  };

  get className() {
    return 'ui-app ' + this.state.deviceType;
  }

  render() {
    return (
      <div className={this.className}>
        <AppContext.Provider value={props}>
          {this.props.children}
        </AppContext.Provider>
      </div>
    );
  }
}