import * as React from 'react';
import { createContext, Component } from 'react';

import { getDeviceType } from './get-device-type';
import { UIRouter } from '../router/router';
import { Routes } from '../router/router-base';

export interface UIAppProps {
  routes: Routes;
  uiBackIcon?: string;
}

const props: UIAppProps = {
  uiBackIcon: 'ui-icon-arrow-back',
  routes: []
};

export const AppContext = createContext(props);

export class UIApp extends Component<UIAppProps> {
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
          <UIRouter routes={this.props.routes}/>
        </AppContext.Provider>
      </div>
    );
  }
}