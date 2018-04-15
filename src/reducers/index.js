import { handleActions } from 'redux-actions';
import Debug from 'debug';

import { REQUEST_DATA, LOADING_DATA, RECEIVE_DATA } from '../actions/index';

const debug = Debug('Mr.Papper::reducers::index');

const initialState = {
    requestData: false,
    isLoading: false,
    page: 0,
    data: {
        id: 0,
        title: '',
        conference: [],
        tags: []
    }
};

export default handleActions(
    {
        [REQUEST_DATA]: (state, action) => {
            /** User request the pdf data */
            debug('request data:', state);
            return Object.assign({}, state, {
                requestData: true
            });
        },
        [LOADING_DATA]: (state, action) => {
            /** Application load data based on user request
             * so, this reducer must be included action payload
             */
            debug('loading data:', state);
            return Object.assign({}, state, {
                isLoading: true
            });
        },
        [RECEIVE_DATA]: (state, action) => {
            debug('received data:', state);
            debug('action: ', action);
            return Object.assign({}, state, {
                requestData: false,
                isLoading: false
            });
        }
    },
    initialState
);
