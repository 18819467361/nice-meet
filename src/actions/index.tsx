import * as constants from '../constants'

export interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}

export interface TestUp {
    type: constants.TEST_UP;
}

export interface TestDown {
    type: constants.TEST_DOWN;
}


export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;
export type TestAction = TestUp | TestDown;


export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    }
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    }
}
export function testUp(): TestAction {
    return {
        type: constants.TEST_UP
    }
}

export function testDown(): TestAction {
    return {
        type: constants.TEST_DOWN
    }
}
