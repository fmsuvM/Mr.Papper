import { createAction } from 'redux-actions';
import Debug from 'debug';

import {
    INIT_APP,
    CHANGE_MODE,
    RECEIVE_DATA,
    LOADING_DATA
} from './actiontypes';

const debug = Debug('Mr.Papper::Action::');

export const receiveData = createAction(RECEIVE_DATA, data => {
    debug('data: ', data);
    return {
        data
    };
});

export const loadingData = createAction(LOADING_DATA);

export const initApp = createAction(INIT_APP, user => {
    return user;
});

export const changeMode = createAction(CHANGE_MODE, mode => {
    return mode;
});
