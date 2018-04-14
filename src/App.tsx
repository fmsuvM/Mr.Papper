import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import * as qs from 'qs';
import * as Debug from 'debug';

import reducers from './reducers/index';
import epicsMiddleware from './middleware/index';
import loader from './utils/PDFLoader';

import Home from './components/Home';

const debug = Debug('Mr.Papper::App');
const isDev = qs.parse(location.search.replace('?', ''))['isDev'] || false;
debug(qs.parse(location.search.replace('?', ''))['isDev']);

window.addEventListener('DOMContentLoaded', () => {
    debug('=====> Mount App');
    // const composeEnhances = isDev
    //     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    //     : compose;
    const store = createStore(reducers, {});
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
