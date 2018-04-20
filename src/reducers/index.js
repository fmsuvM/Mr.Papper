import { handleActions } from 'redux-actions';
import Debug from 'debug';

const debug = Debug('Mr.Papper::reducers::index');

const initialState = {
    username: '',
    mode: 'init',
    requestData: false,
    isLoading: false,
    page: 0,
    data: {
        perId: {},
        allIds: []
    }
};

export default handleActions(
    {
        INIT_APP: (state, action) => {
            /** receive user data & show profile */
            debug('init app and user name: ', action.payload);
            const{ name } = action.payload;
            return Object.assign({}, state, {
                username: name
            });
        },
        '@@router/LOCATION_CHANGE': (state, action) => {
            /** change state.mode */
            const{ pathname } = action.payload;
            debug('change mode: ', pathname);
            return Object.assign({}, state, {
                mode: pathname.split('/')[1]
            });
        },
        LOADING_DATA: (state, action) => {
            /** Application load data based on user request
             * so, this reducer must be included action payload
             */
            debug('loading data:', action.pauload);
            return Object.assign({}, state, {
                isLoading: true
            });
        },
        RECEIVE_DATA: (state, action) => {
            debug('received data:', state);
            debug('action: ', action);
            return Object.assign({}, state, {
                isLoading: false
            });
        },
        SELECT_DATA: (state, action) => {
            const{ path } = action.payload;
            debug('user selected some data: ', path);
            return state;
        }
    },
    initialState
);
