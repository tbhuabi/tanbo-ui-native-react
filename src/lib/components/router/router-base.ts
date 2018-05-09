import { Routes } from './router-help';

export interface UrlTree {
  root: UrlTree;
  parent: UrlTree;
  path: string;
  children: Array<UrlTree> | Promise<Routes> | null;
}

export class RouterMatcher {
  private path: string;

  constructor(path: string) {
    this.path = path;
  }

  match(url?: string): boolean {
    return url === this.path;
  }
}

export function createUrlTree(routes: Routes, parent: UrlTree): Array<UrlTree> {
  const tree: Array<UrlTree> = [];
  routes.forEach(item => {
    const child: any = {
      root: parent.root,
      parent: parent,
      path: new RouterMatcher(item.path)
    };

    if (item.children) {
      if (item.children instanceof Promise) {
        child.children = item.children;
      } else {
        child.children = createUrlTree(item.children, child);
      }
    }
    tree.push(child as UrlTree);
  });
  return tree;
}
