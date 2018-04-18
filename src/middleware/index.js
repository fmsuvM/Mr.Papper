import { combineEpics, createEpicMiddleware } from 'redux-observable';
import Rx from 'rxjs';
import Debug from 'debug';

import loader from '../utils/PDFLoader';
import { REQUEST_DATA, LOADING_DATA } from '../actions/actiontypes';
import { receiveData, loadingData } from '../actions/index';

const debug = Debug('Mr.Papper::middleware::');

const requestDataEpic = (action$, store) =>
    action$
        .ofType(REQUEST_DATA)
        .do(_ => debug('request data'))
        .switchMap(action => {
            return loader.loadFolder();
        })
        .map(data => {
            debug('data', data);
            return receiveData(data);
        });

const loadingDataEpic = (action$, store) =>
    action$
        .ofType(LOADING_DATA)
        .switchMap(action => {
            const text = action.payload;
            return loader.loadFolder(text);
        })
        .map(data => {
            debug('data: ', data);
            return receiveData(data);
        });
export default createEpicMiddleware(
    combineEpics(requestDataEpic, loadingDataEpic)
);
