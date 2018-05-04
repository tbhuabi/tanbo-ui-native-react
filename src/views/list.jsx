import React from 'react';
import { UIPage, UIHeader, UIContent, UIBack, UINavbar, UITitle } from '../lib/index';

export class List extends React.Component {
  render() {
    return (
      <UIPage>
        <UIHeader>
          <UINavbar>
            <UIBack>首页</UIBack>
            <UITitle>列表</UITitle>
          </UINavbar>
        </UIHeader>
        <UIContent/>
      </UIPage>
    );
  }
}