import { combineEpics, createEpicMiddleware } from 'redux-observable';
import Rx from 'rxjs';
import Debug from 'debug';
const electron = window.require('electron');

import loader from '../utils/PDFLoader';
import storageLoader from '../utils/storageLoader';
import {
    INIT_APP,
    SINGIN_USER,
    REGIST_PAPER,
} from '../actions/actiontypes';
import {
    initApp,
    openPaperRegister,
    registeringPaper,
    createPaperJson
} from '../actions/index';

const debug = Debug('Mr.Papper::middleware::');

/** select directory function */
const selectDir = () => {
    const path = electron.remote.dialog.showOpenDialog({
        properties: ['openDirectory']
    });
    const info = {
        name: 'tkd',
        dir: path[0]
    };
    storageLoader.saveUserInfo(info);
    return info;
};

const signInUserEpic = (action$, store) =>
    action$.ofType(SINGIN_USER).map(action => {
        const userInfo = action.payload ?
            storageLoader.loadUserInfo() :
            selectDir();
        return initApp(userInfo);
    });

const initializeAppEpic = (action$, store) =>
    action$
        .ofType(INIT_APP)
        .switchMap(action => {
            const{ name, dir } = action.payload;
            return loader.loadDir(dir);
        })
        .map(data => receiveData(data));

const registPaperEpic = (action$, store) =>
    action$
        .ofType(REGIST_PAPER)
        .map(action => openPaperRegister(action.payload));

export default createEpicMiddleware(
    combineEpics(
        signInUserEpic,
        initializeAppEpic,
        registPaperEpic,
);
