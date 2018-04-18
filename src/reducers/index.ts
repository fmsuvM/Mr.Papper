import { handleActions, Action } from 'redux-actions';
import * as Debug from 'debug';

import { RootState, TestAction } from '../models/model';
import { REQUEST_DATA, LOADING_DATA, RECEIVE_DATA } from '../actions/types';

const debug = Debug('Mr.Papper::reducers::index');

const initialState: RootState = {
    requestData: false,
    isLoading: false,
    page: 0,
    data: {
        id: 0,
        title: '',
        conferences: [],
        tags: []
    }
};

export default handleActions<RootState, TestAction>(
    {
        [REQUEST_DATA]: (state: RootState, action: any): RootState => {
            return {
                ...state,
                requestData: true
            };
        },
        [LOADING_DATA]: (state: RootState, action: any): RootState => {
            return {
                ...state,
                isLoading: true
            };
        },
        [RECEIVE_DATA]: (state: RootState, action: any): RootState => {
            return {
                ...state,
                requestData: false,
                isLoading: false
            };
        }
    },
    initialState
);
// [LOADING_DATA]: (state, action) => {
//     /** Application load data based on user request
//      * so, this reducer must be included action payload
//      */
//     debug('loading data:', state);
//     return Object.assign({}, state, {
//         isLoading: true
//     });
// },
// [RECEIVE_DATA]: (state, action) => {
//     debug('received data:', state);
//     return Object.assign({}, state, {
//         requestData: false,
//         isLoading: false
//     });
// }
