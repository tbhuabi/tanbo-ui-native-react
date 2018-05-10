import { createContext } from 'react';
import { Route, UrlSegment } from './router-help';

export interface RouterContext {
  component?: any;
  route?: Route;
  pathPrefix?: string;
  urlSegments?: UrlSegment[];
}

export const UIRouterContext = createContext<RouterContext>({});