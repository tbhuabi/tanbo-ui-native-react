import * as React from 'react';
import { Component } from 'react';
import { UIPage, UIHeader, UIContent, UIBack, UINavbar, UITitle } from '../lib/index';

export class List extends Component {
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