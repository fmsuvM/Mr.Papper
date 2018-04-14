import { createAction } from 'redux-actions';
import * as Debug from 'debug';

import {
    REQUEST_DATA,
    LOADING_DATA,
    RECEIVE_DATA,
    TEST_TRIGGER
} from './types';
import { Action } from '../models/model';

const debug = Debug('Mr.Papper::Action');

const requestData = createAction<Action, Action>(
    REQUEST_DATA,
    (action: Action) => action
);
const loadingData = createAction<Action, Action>(
    LOADING_DATA,
    (action: Action) => action
);

const receiveData = createAction<Action, Action>(
    RECEIVE_DATA,
    (action: Action) => action
);

const testTrigger = createAction<void>(TEST_TRIGGER, () => {});

export { requestData, loadingData, receiveData, testTrigger };

// export const receiveData = createAction(RECEIVE_DATA, data => {
//     return {
//         data
//     };
// });
