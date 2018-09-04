import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.less';
import {LocaleProvider} from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import "moment/locale/zh-cn"
import Routerdiv from './router/router'

class App extends Component {
    render() {
        return (
            <Routerdiv></Routerdiv>
        );
    }
}

class AppLocale extends Component {
    render() {
        return (
            <LocaleProvider locale={zh_CN}><App></App></LocaleProvider>
        )
    }
}

export default AppLocale;
