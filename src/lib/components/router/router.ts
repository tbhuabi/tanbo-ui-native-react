import { Routes, UrlSegmentType, QueryParams } from './router-help';
import { UrlParser } from './url-parser';

export class Router {
  constructor(private routes: Routes,
              private baseHref: string,
              private parent: Router | null,
              private onUpdate: (component: any) => any) {
  }

  navigate(path: string, queryParams?: QueryParams): Promise<any> {
    if (typeof path !== 'string') {
      return Promise.reject(new Error(`${path} 不是一个字符串`));
    }
    const urlSegments = new UrlParser(path).parse();

    const currentUrl = urlSegments.shift();

    if (currentUrl) {
      switch (currentUrl.type) {
        case UrlSegmentType.child:
          return this.getComponent(currentUrl.token).then((c: any) => {
            this.onUpdate(c);
            this.updateUrl(currentUrl.token, queryParams);
          });
        case UrlSegmentType.parent:
          if (this.parent) {
            return this.parent.navigate(path, queryParams);
          }
      }
    }
    return Promise.reject(new Error(''));
  }

  // navigateByUrlSegments(urlSegments: UrlSegment[], options?: NavigationOptions): Promise<any> {
  //   return Promise.resolve({
  //     urlTree: this.urlTree,
  //     urlSegments,
  //     options
  //   });
  // }

  // private matcher(urlSegment: UrlSegment): Promise<any> {}

  private updateUrl(path: string, queryParams?: QueryParams) {
    let queryString: string = '';
    if (queryParams) {
      const query: string[] = [];
      Object.keys(queryParams).forEach(key => {
        query.push(key + '=' + queryParams[key]);
      });
      queryString = query.join('=');
    }
    const url = this.baseHref + path + (queryString ? '?' + queryString : '');
    history.pushState(null, undefined, url);
  }

  private getComponent(token: string): Promise<any> {
    for (const route of this.routes) {
      if (route.path === token) {
        if (route.component instanceof Promise) {
          return route.component;
        } else {
          return Promise.resolve(route.component);
        }
      }
    }
    return Promise.reject(new Error('未匹配到路由' + token))
  }

  // private createUrlTree(routes: Routes, parent: UrlTree): UrlTree[] {
  //   const childTree: UrlTree[] = [];
  //   routes.forEach(item => {
  //     const urlTree: UrlTree = {
  //       parent,
  //       path: item.path,
  //       component: item.component
  //     };
  //     urlTree.children = Array.isArray(item.children) ? this.createUrlTree(item.children, urlTree) : item.children;
  //     childTree.push(urlTree);
  //   });
  //   return childTree;
  // }
}