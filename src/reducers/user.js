import { handleActions } from 'redux-actions';
import Debug from 'debug';

const debug = Debug('Mr.Papper::reducer::user');

const initialState = {
    isLoggedIn: false,
    name: '',
    dir: ''
};

export default handleActions(
    {
        SINGIN_USER: (state, action) => {
            const name = localStorage.name;
            const dir = localStorage.dir;
            return Object.assign({}, state, {
                isLoggedIn: true,
                name: name,
                dir: dir
            });
        },
        SIGNOUT_USER: (state, action) => {
            return Object.assign({}, state, {
                isLoggedIn: false,
                name: '',
                dir: ''
            });
        }
    },
    initialState
);
