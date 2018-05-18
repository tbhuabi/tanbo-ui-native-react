export interface Route {
  path: string;
  component: any | Promise<any>;
  children?: Routes | Promise<Routes>;
}

export declare type Routes = Route[];

export interface Params {
  [key: string]: any;
}

export interface QueryParams {
  [key: string]: any;
}

export enum UrlSegmentType {
  root,
  parent,
  self,
  child,
  query,
  hash,
  param
}

export interface UrlSegment {
  token: string;
  type: UrlSegmentType;
  params?: Params;
}

export interface UrlTree {
  parent: UrlTree | null;
  path: string;
  component: any | Promise<any>;
  children?: UrlTree[] | Promise<Routes>;
}

export interface NavigationOptions {
  params?: Params;
  queryParams?: QueryParams;
}