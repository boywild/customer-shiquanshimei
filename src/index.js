import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'antd/dist/antd.css';
import { createStore, createApp, initClient } from './app';
import 'styles/common.scss';

const { store, history } = createStore(createBrowserHistory(), {});
const application = createApp(store, history);

initClient(store.dispatch);

ReactDOM.render(<LocaleProvider locale={zh_CN}>{application}</LocaleProvider>, window.document.getElementById('app'));
