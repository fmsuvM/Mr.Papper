import React from 'react';
import ReactDOM from 'react-dom';
import 'rxjs';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import Debug from 'debug';

import reducers from './reducers/index';
import epicsMiddleware from './middleware/index';
import loader from './utils/PDFLoader';
import { loadingData } from './actions/index';

import Home from './pages/Home';

const debug = Debug('Mr.Papper::App');

window.addEventListener('DOMContentLoaded', () => {
    debug('=====> Mount App');
    const composeEnhances =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        reducers,
        composeEnhances(applyMiddleware(epicsMiddleware))
    );
    loader.init(store);
    store.dispatch(loadingData('initialize'));
    ReactDOM.render(
        <Provider store={store}>
            <div className="body">
                <Home />
            </div>
        </Provider>,
        document.getElementById('app')
    );
});
