import { Home } from './views/home';
import { List } from './views/list';

import { Routes } from './lib/index';

export const routes: Routes = [{
  path: '',
  component: Home
}, {
  path: 'list',
  component: List
}];