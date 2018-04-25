import { handleActions } from 'redux-actions';
import fs from 'fs-extra';
import Debug from 'debug';

const debug = Debug('Mr.Papper::reducers::manager');

const initialState = {
    username: '',
    mode: 'init',
    requestData: false,
    isLoading: false,
    isShowModal: false,
    targetPaper: null,
    page: 0,
    paper: [],
    unknown: [],
    data: {
        perId: {},
        allIds: []
    }
};

const fetchPaperInfo = paper => {
    const paperObj = [];
    paper.map((filename, index) => {
        const _info = fs.readJsonSync(
            `${__dirname}/../src/data/paper/${filename}.json`
        );
        paperObj[index] = _info;
    });
    return paperObj;
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
            debug('loading data:', action.pauload);
            return Object.assign({}, state, {
                isLoading: true
            });
        },
        RECEIVE_DATA: (state, action) => {
            const{ registered, unregistered } = action.payload;
            return Object.assign({}, state, {
                isLoading: false,
                paper: fetchPaperInfo(registered),
                unknown: unregistered
            });
        },
        OPEN_PAPER_REGISTER: (state, action) => {
            return Object.assign({}, state, {
                isShowModal: true,
                targetPaper: action.payload
            });
        },
        CLOSE_PAPER_MODAL: (state, action) => {
            return Object.assign({}, state, {
                isShowModal: false,
                targetPaper: null
            });
        },
        REGISTERING_PAPER: (state, action) => {
            return Object.assign({}, state, {
                isLoading: true
            });
        },
        CREATE_PAPER_JSON: (state, action) => {
            debug('create paper info action: ', action.payload);
            return Object.assign({}, state, {
                isLoading: false,
                isShowModal: false
            });
        },
        DUMMY_ACTION: (state, action) => {
            debug('dummy action: ', action.payload);
            return Object.assign({}, state, {
                isShowModal: false
            });
        }
    },
    initialState
);
