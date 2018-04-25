import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';
import Debug from 'debug';

const debug = Debug('Mr.Papper::reducer::index');

import manager from './manager';
import user from './user';

export default combineReducers({
    manager,
    user,
    router: routerReducer,
    form: reduxFormReducer
});
