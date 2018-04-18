import { combineEpics, Epic, createEpicMiddleware } from 'redux-observable';
import * as Rx from 'rxjs';
import * as Debug from 'debug';

import loader from '../utils/PDFLoader';
import { RootState, TestAction, Action } from '../models/model';
import { REQUEST_DATA } from '../actions/types';
// import { receiveData } from '../actions/index';

const debug = Debug('Mr.Papper::middleware::');

const requestDataEpic = (action$: any, store: any) =>
    action$
        .ofType(REQUEST_DATA)
        .do((_: any) => debug('request data'))
        .ignoreElements();
// .switchMap((action: Action) => {
//     debug('action', action);
//     return loader.loadFolder();
// })
// .map(data => {
//     debug('data', data);
//     return receiveData('hoge');
// });
export default createEpicMiddleware(combineEpics(requestDataEpic));
