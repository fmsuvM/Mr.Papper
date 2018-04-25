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
    RECEIVE_PAPER_INFO
} from '../actions/actiontypes';
import {
    receiveData,
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

const receivePaperInfoEpic = (action$, store) =>
    action$
        .ofType(RECEIVE_PAPER_INFO)
        .do(_ => store.dispatch(registeringPaper()))
        .switchMap(action => loader.createPaperData(action.payload))
        .map(data => {
            debug('data: ', data);
            return createPaperJson(data);
        });

export default createEpicMiddleware(
    combineEpics(
        signInUserEpic,
        initializeAppEpic,
        registPaperEpic,
        receivePaperInfoEpic
    )
);
