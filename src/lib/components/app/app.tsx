import * as React from 'react';
import { createContext, Component } from 'react';

import { getDeviceType } from './get-device-type';
import { UIRouterOutlet } from '../router/router-outlet';
import { Routes } from '../router/router-help';
import { UIRouterContext } from '../router/router-context';
import { Router } from '../router/router';

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

export const AppContext = createContext<UIAppProps>(defaultProps);

export class UIApp extends Component<UIAppProps> {
  static defaultProps: UIAppProps = defaultProps;

  state = {
    deviceType: getDeviceType(),
    childComponent: null
  };

  private pathname = location.pathname;
  private router: Router;

  constructor(props: any, context: any) {
    super(props, context);
    const pathReg = new RegExp(`^${this.props.baseHref}`);
    if (!pathReg.test(this.pathname)) {
      throw new Error(`没有匹配到路由${this.pathname}`);
    }
    const initUrl = this.pathname.replace(pathReg, '/');
    this.router = new Router(this.props.routes, this.props.baseHref || '/', null, (c: any) => {
      this.setState({
        childComponent: c
      });
    });
    this.router.navigate(initUrl);
  }

  get className() {
    return 'ui-app ' + this.state.deviceType;
  }

  render() {
    return (
      <div className={this.className}>
        <AppContext.Provider value={this.props}>
          <UIRouterContext.Provider value={{
            router: this.router,
            component: this.state.childComponent
          }}>
            <UIRouterOutlet/>
          </UIRouterContext.Provider>
        </AppContext.Provider>
      </div>
    );
  }
}