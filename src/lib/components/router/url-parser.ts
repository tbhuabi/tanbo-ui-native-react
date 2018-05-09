import { UrlSegment, UrlSegmentType, Params, QueryParams } from './router-help';

export class UrlParser {
  private index: number = 0;
  private urlSegments: Array<UrlSegment> = [];

  constructor(private url: string) {
  }

  parse(): Array<UrlSegment> {
    if (this.expect('/')) {
      this.urlSegments.push({
        token: '/',
        type: UrlSegmentType.root
      });
      this.index++;
    }
    while (this.index < this.url.length) {
      if (this.expect('./')) {
        this.urlSegments.push({
          token: './',
          type: UrlSegmentType.self
        });
        this.index += 2;
      } else if (this.expect('../')) {
        this.urlSegments.push({
          token: '../',
          type: UrlSegmentType.parent
        });
        this.index += 3;
      } else if (this.expect('#')) {
        this.urlSegments.push(this.readHash());
      } else if (this.expect('?')) {
        this.urlSegments.push(this.readQueryParams());
      } else if (this.expect('/')) {
        this.index++;
      } else {
        this.urlSegments.push(this.readSegment());
      }
    }

    return this.urlSegments;
  }

  readSegment(): UrlSegment {
    let path: string = '';
    while (this.index < this.url.length) {
      const ch = this.url.charAt(this.index);
      if (ch === '/' || ch === '#' || ch === '?') {
        break;
      } else {
        this.index++;
        path += ch;
      }
    }
    const tokens = path.split(';');
    const pathName = tokens.shift() + '';
    const urlSegment: UrlSegment = {
      token: pathName,
      type: UrlSegmentType.child
    };

    if (tokens.length) {
      const params: Params = {};
      tokens.forEach(token => {
        const arr = token.split('=');
        params[arr[0]] = arr[1];
      });
      urlSegment.params = params;
    }

    return urlSegment;
  }

  readQueryParams(): UrlSegment {
    this.index++;
    const tokens = this.later().split('#');
    const queryString = tokens.shift() + '';
    const queryParams: QueryParams = {};
    queryString.split('&').forEach(token => {
      const arr = token.split('=');
      queryParams[arr[0]] = arr[1];
    });

    this.index += queryString.length;
    return {
      token: queryString,
      type: UrlSegmentType.query,
      params: queryParams
    };
  }

  readHash(): UrlSegment {
    this.index++;
    const hash = this.later();
    this.index = this.url.length;
    return {
      token: hash,
      type: UrlSegmentType.hash
    };
  }

  later(): string {
    return this.url.slice(this.index, this.url.length);
  }

  expect(text: string): boolean {
    const entIndex = this.index + text.length;
    return entIndex <= this.url.length ? text === this.url.slice(this.index, entIndex) : false;
  }
}