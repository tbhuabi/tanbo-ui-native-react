import { UrlTree, } from './router-base';
import { Params, QueryParams } from './router-help';

export class Router {
  private urlTree: UrlTree;

  constructor(urlTree: UrlTree) {
    this.urlTree = urlTree;
  }

  navigate(path: string, options?: { params?: Params, queryParams?: QueryParams }): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      console.log(this.urlTree);
      const paths = this.pathToSegment(path);
      if (paths) {
        resolve();
      } else {
        reject();
      }
      // let next = this.urlTree;
      // while (paths.length) {
      //   const s = paths.shift();
      //   switch (s) {
      //     case '/':
      //       next = next.root;
      //       break;
      //     case './':
      //       break;
      //     case '../':
      //       next = next.parent;
      //       break;
      //     default:
      //       if (/.+\/$/.test(s)) {
      //         const pathName = s.replace('/', '');
      //         if (next.children) {
      //           let isMatched: boolean = false;
      //           for (const item of next) {
      //             if (item.matcher.match(pathName)) {
      //               next = item;
      //               isMatched = true;
      //               break;
      //             }
      //           }
      //           if (!isMatched) {
      //             throw new Error(`没有匹配到${s}`);
      //           }
      //
      //         } else {
      //           throw new Error(`路由没有配置${s}`);
      //         }
      //       } else {
      //         console.log('test');
      //       }
      //   }
      // }
    });
  }

  navigateByUrl(url: string): Promise<void> {
    // const urlSegments = new UrlParser(url).parse();
    return this.navigate(url);
  }

  private pathToSegment(path: string): Array<string> {
    return path.match(/^\/|[^/?]+\/|[^/]+$/g) || ['./'];
  }
}