import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, Store } from 'redux';
import { Provider } from 'react-redux';
import * as Debug from 'debug';

import reducers from './reducers/index';
import epicsMiddleware from './middleware/index';
import loader from './utils/PDFLoader';
import { RootState } from './models/model';

import Home from './components/Home';

const debug = Debug('Mr.Papper::App');

window.addEventListener('DOMContentLoaded', () => {
    debug('=====> Mount App');
    const initialState = {};
    const enhancer = window['devToolsExtension']
        ? window['devToolsExtension']()(createStore)
        : createStore;
    const store: Store<any> = enhancer(reducers, initialState);
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
