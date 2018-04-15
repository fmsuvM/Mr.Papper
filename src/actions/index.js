import { createAction } from 'redux-actions';
import Debug from 'debug';

import { RECEIVE_DATA, LOADING_DATA } from './actiontypes';

const debug = Debug('Mr.Papper::Action::');

export const receiveData = createAction(RECEIVE_DATA, data => {
    debug('data: ', data);
    return {
        data
    };
});

export const loadingData = createAction(LOADING_DATA, text => {
    return text;
});
