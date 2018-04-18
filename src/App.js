import React from 'react';
import ReactDOM from 'react-dom';
import 'rxjs';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import Debug from 'debug';
import { Switch, Route } from 'react-router-dom';
import createMemoryHistory from 'history/createMemoryHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

import reducers from './reducers/index';
import epicsMiddleware from './middleware/index';
import loader from './utils/PDFLoader';
import { loadingData } from './actions/index';

import Home from './pages/Home';
import List from './components/List';
import DnD from './components/DnD';
import Start from './components/Start';
import AppManager from './components/AppManager';

const debug = Debug('Mr.Papper::Root::');

window.addEventListener('DOMContentLoaded', () => {
    debug('=====> Mount App');
    const history = createMemoryHistory();
    const composeEnhances =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        reducers,
        composeEnhances(
            applyMiddleware(epicsMiddleware, routerMiddleware(history))
        )
    );
    loader.init(store);
    store.dispatch(loadingData('initialize'));
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route component={Start} path="/hoge" />
                    <Route
                        path="/"
                        render={() => (
                            <AppManager>
                                <Switch>
                                    <Route component={Home} path="/" exact />
                                    <Route component={List} path="/list" />
                                    <Route component={DnD} path="/dnd" />
                                    <Route component={Start} path="/start" />
                                </Switch>
                            </AppManager>
                        )}
                    />
                </Switch>
            </ConnectedRouter>
        </Provider>,
        document.getElementById('app')
    );
});
