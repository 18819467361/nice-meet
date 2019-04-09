import {TestAction} from '../actions';
import {TEST_UP,TEST_DOWN} from '../constants';

const initialState = {
    languageName: 'wow333',
    test: 3,
}

export default function enthusiasm(state=initialState, action: TestAction) {
    switch (action.type) {
        case TEST_UP:
            return {...state, test: state.test + 2};
        case TEST_DOWN:
            return {...state, test: Math.max(1, state.test - 1)};
    }
    return state;
}