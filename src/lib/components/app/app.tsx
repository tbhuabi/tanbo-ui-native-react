import * as React from 'react';
import { createContext, Component } from 'react';

import { getDeviceType } from './get-device-type';
import { UIRouterOutlet } from '../router/router-outlet';
import { Routes, UrlSegment, Route, UrlSegmentType } from '../router/router-help';
import { UIRouterContext } from '../router/router-context';
import { UrlParser } from '../router/url-parser';

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
    deviceType: getDeviceType(),
    childComponent: null
  };

  private pathname = location.pathname;
  private urlSegments: UrlSegment[];
  private childRoute: Route;

  constructor(props: any, context: any) {
    super(props, context);
    const pathReg = new RegExp(`^${this.props.baseHref}`);
    if (!pathReg.test(this.pathname)) {
      throw new Error(`没有匹配到路由${this.pathname}`);
    }
    const initUrl = this.pathname.replace(pathReg, '/');

    this.urlSegments = new UrlParser(initUrl).parse();
    let currentPath = this.urlSegments.shift();
    if (currentPath && currentPath.type === UrlSegmentType.root) {
      currentPath = this.urlSegments.shift();
    }
    if (currentPath) {
      for (const route of this.props.routes) {
        if (route.path === currentPath.token) {
          this.childRoute = route;
          if (route.component instanceof Promise) {
            route.component.then(c => {
              this.setState({
                childComponent: c
              });
            });
          } else {
            this.state.childComponent = route.component;
          }
        }
      }
    }
  }

  get className() {
    return 'ui-app ' + this.state.deviceType;
  }

  render() {
    return (
      <div className={this.className}>
        <AppContext.Provider value={this.props}>
          <UIRouterContext.Provider value={{
            route: this.childRoute,
            component: this.state.childComponent,
            pathPrefix: this.props.baseHref,
            urlSegments: this.urlSegments
          }}>
            <UIRouterOutlet/>
          </UIRouterContext.Provider>
        </AppContext.Provider>
      </div>
    );
  }
}