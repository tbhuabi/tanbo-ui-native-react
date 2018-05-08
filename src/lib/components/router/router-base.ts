export interface Route {
  path: string;
  component: any | Promise<any>;
  children?: Routes;
}

export interface Params {
  [key: string]: any
}

export interface QueryParams {
  [key: string]: any
}

export interface UrlSegment {
  name: string;
  params: Params;
  queryParams: QueryParams;
}

export declare type Routes = Route[];

export interface UrlTree {
  parent: UrlTree | null;
  matcher: RouterMatcher;
  children: Array<UrlTree>;
}

export class RouterMatcher {
  private urlSegment: UrlSegment;

  constructor(path: string) {

  }

  match(url: string): boolean {

  }
}

export class UrlParser {
  constructor(url: string) {

  }
}

export function createUrlTree(routes: Routes, parent: UrlTree = null): Array<UrlTree> {
  const tree: Array<UrlTree> = [];
  routes.forEach(item => {

  });
  return tree;
}
