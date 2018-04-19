import { combineEpics, createEpicMiddleware } from 'redux-observable';
import Rx from 'rxjs';
import Debug from 'debug';

import loader from '../utils/PDFLoader';
import { receiveData, loadingData } from '../actions/index';

const debug = Debug('Mr.Papper::middleware::');

const searchDataEpic = (action$, store) =>
    action$
        .ofType('@@router/LOCATION_CHANGE')
        .filter(action => action.payload.pathname === '/list')
        .do(_ => store.dispatch(loadingData()))
        .switchMap(action => {
            debug('search papers action payload: ', action.payload);
            return loader.loadFolder('');
        })
        .map(data => {
            debug('searched');
            return receiveData(data);
        });
export default createEpicMiddleware(combineEpics(searchDataEpic));
