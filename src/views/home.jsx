import React from 'react';
import { Link } from 'react-router-dom';
import { UIPage, UIHeader, UIContent, UIBack, UINavbar, UITitle } from '../lib/index';

export class Home extends React.Component {
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
          <Link href="/list" to="/list">list</Link>
        </UIContent>
      </UIPage>
    );
  }
}