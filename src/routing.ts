import { Home } from './views/home';
import { List } from './views/list';

import { UIRoutes } from './lib/index';

export const routes: UIRoutes = [{
  path: '',
  component: Home
}, {
  path: 'list',
  component: List
}];