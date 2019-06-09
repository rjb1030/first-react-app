import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TopRouter from './router/topRouter';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './reducers/store';

console.log("初始化index.js store参数",store.getState())

ReactDOM.render(<Provider store={store}><TopRouter /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
