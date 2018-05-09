import * as React from 'react';
import { createContext, Component } from 'react';

import { getDeviceType } from './get-device-type';
import { UIRouterOutlet } from '../router/router-outlet';
import { Routes } from '../router/router-help';
import { UIRouterContext } from '../router/router-context';

export interface UIAppProps {
  routes: Routes;
  uiBackIcon?: string;
  baseHref?: string;
}

const defaultProps: UIAppProps = {
  uiBackIcon: 'ui-icon-arrow-back',
  routes: [],
  baseHref: '/'
};

export const AppContext = createContext(defaultProps);

export class UIApp extends Component<UIAppProps> {
  static defaultProps: UIAppProps = defaultProps;

  state = {
    deviceType: getDeviceType()
  };

  constructor(props: any, context: any) {
    super(props, context);
    console.log(this);
  }

  get className() {
    return 'ui-app ' + this.state.deviceType;
  }

  render() {
    return (
      <div className={this.className}>
        <AppContext.Provider value={this.props}>
          <UIRouterContext.Provider value={{
            routes: this.props.routes
          }}>
            <UIRouterOutlet/>
          </UIRouterContext.Provider>
        </AppContext.Provider>
      </div>
    );
  }
}