import { handleActions } from 'redux-actions';
import Debug from 'debug';

const debug = Debug('Mr.Papper::reducers::manager');

const initialState = {
    username: '',
    mode: 'init',
    requestData: false,
    isLoading: false,
    page: 0,
    papers: [],
    data: {
        perId: {},
        allIds: []
    }
};

export default handleActions(
    {
        INIT_APP: (state, action) => {
            /** receive user data & show profile */
            const{ name } = action.payload;
            return Object.assign({}, state, {
                username: name,
                isLoading: true
            });
        },
        '@@router/LOCATION_CHANGE': (state, action) => {
            /** change state.mode */
            const{ pathname } = action.payload;
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
            const{ data } = action.payload;
            /**
             * data is array.
             *
             */
            return Object.assign({}, state, {
                isLoading: false,
                papers: data
            });
        }
    },
    initialState
);
