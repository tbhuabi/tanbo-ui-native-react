import { Home } from './views/home';
import { List } from './views/list';

import { Routes } from './lib/index';

export const routes: Routes = [{
  path: '',
  component: new Promise((resolve) => {
    setTimeout(() => {
      resolve(Home)
    }, 5000);
  })
}, {
  path: 'list',
  component: List
}];