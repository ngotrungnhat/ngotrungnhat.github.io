import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import noteStore from './Component/Store'

ReactDOM.render(
    <Provider store={noteStore}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
