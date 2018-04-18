import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, Store } from 'redux';
import { Provider } from 'react-redux';
import * as Debug from 'debug';
import 'rxjs';

import reducers from './reducers/index';
import loader from './utils/PDFLoader';
import { RootState } from './models/model';
import rootMiddleware from './middleware/index';

import { ConnectedHome } from './connected/ConnectedHome';

const debug = Debug('Mr.Papper::App');

window.addEventListener('DOMContentLoaded', () => {
    debug('=====> Mount App');
    const initialState = {};
    const enhancer: any = window['devToolsExtension']
        ? window['devToolsExtension']()(createStore)
        : createStore;
    const middleware = applyMiddleware(rootMiddleware);
    const store: Store<any> = middleware(enhancer)(reducers, initialState);
    loader.init(store);
    ReactDOM.render(
        <Provider store={store}>
            <div className="body">
                <ConnectedHome />
            </div>
        </Provider>,
        document.getElementById('app')
    );
});
