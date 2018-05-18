import { createContext } from 'react';
import { Router } from './router';

export interface RouterContext {
  router?: Router;
  component?: any;
}

export const UIRouterContext = createContext<RouterContext>({});