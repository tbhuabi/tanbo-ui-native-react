import * as React from 'react';
import { Component } from 'react';
import { UIRouterContext, RouterContext } from './router-context';
import { UrlSegment } from './router-help';

export class UIRouterOutlet extends Component {
  state: any = {
    component: null
  };

  render() {
    console.log(this);
    return (
      <UIRouterContext.Consumer>
        {(context: RouterContext) => {
          const path = context.urlSegments.shift();
          if (path) {
              context.getComponentByUrlSegment(path, context.host).then()
          }
          if (context.urlSegments) {
            childUrlSegments = context.urlSegments.slice(1);
            const path = context.urlSegments[0];
            if (path && context.router) {
              context.router.navigate([path.token], {
                relativeTo: context.parent
              });
            }
          }

          if (context.host && context.router) {
            return (
              <UIRouterContext.Provider value={{
                host: context.host,
                urlSegments: childUrlSegments,
                router: context.router
              }}>
              </UIRouterContext.Provider>
            )
          }
          return '';
        }}
      </UIRouterContext.Consumer>
    );
  }
}