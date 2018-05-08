import * as React from 'react';
import { Component } from 'react';
import { UIPage, UIHeader, UIContent, UIBack, UINavbar, UITitle } from '../lib/index';

export class Home extends Component {
  componentWillMount() {
    console.log(this);
  }
  render() {
    return (
      <UIPage>
        <UIHeader>
          <UINavbar>
            <UIBack>返回</UIBack>
            <UITitle>首页</UITitle>
          </UINavbar>
        </UIHeader>
        <UIContent>
          home
        </UIContent>
      </UIPage>
    );
  }
}