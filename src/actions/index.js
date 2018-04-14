import { createAction } from 'redux-actions';
import Debug from 'debug';

const debug = Debug('Mr.Papper::Action');

export const REQUEST_DATA = 'REQUEST_DATA';
export const LOADING_DATA = 'LOADING_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';

export const receiveData = createAction(RECEIVE_DATA, data => {
    return {
        data
    };
});
