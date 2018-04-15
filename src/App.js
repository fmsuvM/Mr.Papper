import React from 'react';
import ReactDOM from 'react-dom';
import 'rxjs';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import qs from 'qs';
import Debug from 'debug';

import reducers from './reducers/index';
import epicsMiddleware from './middleware/index';
import loader from './utils/PDFLoader';

import Home from './components/Home';

const debug = Debug('Mr.Papper::App');
const isDev = qs.parse(location.search.replace('?', ''))['isDev'] || false;

window.addEventListener('DOMContentLoaded', () => {
    debug('=====> Mount App');
    const composeEnhances =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        reducers,
        composeEnhances(applyMiddleware(epicsMiddleware))
    );
    loader.init(store);
    ReactDOM.render(
        <Provider store={store}>
            <div className="body">
                <Home />
            </div>
        </Provider>,
        document.getElementById('app')
    );
});
