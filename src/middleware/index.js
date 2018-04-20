import { combineEpics, createEpicMiddleware } from 'redux-observable';
import Rx from 'rxjs';
import Debug from 'debug';
const electron = window.require('electron');

import loader from '../utils/PDFLoader';
import { INIT_APP } from '../actions/actiontypes';
import { receiveData } from '../actions/index';

const debug = Debug('Mr.Papper::middleware::');

const initializeAppEpic = (action$, store) =>
    action$
        .ofType(INIT_APP)
        .switchMap(action => {
            const path = electron.remote.dialog.showOpenDialog({
                properties: ['openDirectory']
            });
            const{ name } = action.payload;
            debug(`${name} select and load folder`, path[0]);
            /**
             * store user info to localStorage
             * when there are user name, this process must be passed
             */
            return loader.loadDir(path[0]);
        })
        .map(data => receiveData(data));

export default createEpicMiddleware(combineEpics(initializeAppEpic));
