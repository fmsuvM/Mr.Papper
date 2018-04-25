import { createAction } from 'redux-actions';
import Debug from 'debug';

import {
    INIT_APP,
    CHANGE_MODE,
    RECEIVE_DATA,
    LOADING_DATA,
    SELECT_DATA,
    SINGIN_USER,
    SIGNOUT_USER
} from './actiontypes';

const debug = Debug('Mr.Papper::Action::');

export const receiveData = createAction(RECEIVE_DATA, data => {
    return data;
});

export const loadingData = createAction(LOADING_DATA);

export const initApp = createAction(INIT_APP, userInfo => {
    return userInfo;
});

export const changeMode = createAction(CHANGE_MODE, mode => {
    return mode;
});

export const selectData = createAction(SELECT_DATA, path => {
    return path;
});

export const signinUser = createAction(SINGIN_USER, check => {
    return check;
});

export const signOutUser = createAction(SIGNOUT_USER);
