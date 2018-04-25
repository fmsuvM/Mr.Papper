import { createAction } from 'redux-actions';
import Debug from 'debug';

import {
    INIT_APP,
    CHANGE_MODE,
    RECEIVE_DATA,
    LOADING_DATA,
    SELECT_DATA,
    SINGIN_USER,
    SIGNOUT_USER,
    REGIST_PAPER,
    OPEN_PAPER_REGISTER,
    CLOSE_PAPER_MODAL,
    RECEIVE_PAPER_INFO,
    REGISTERING_PAPER,
    CREATE_PAPER_JSON,
    DUMMY_ACTION
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

export const registPaper = createAction(REGIST_PAPER, filename => {
    return filename;
});

export const openPaperRegister = createAction(OPEN_PAPER_REGISTER, filename => {
    return filename;
});

export const closePaperModal = createAction(CLOSE_PAPER_MODAL);

export const receivePaperInfo = createAction(RECEIVE_PAPER_INFO, info => {
    return info;
});

export const registeringPaper = createAction(REGISTERING_PAPER);

export const createPaperJson = createAction(CREATE_PAPER_JSON, info => {
    return info;
});

export const dummyAction = createAction(DUMMY_ACTION, data => {
    return data;
});
