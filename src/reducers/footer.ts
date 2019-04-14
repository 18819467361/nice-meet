import {FooterIndexAction} from '../actions/footer';
import {FOOTER_INDEX} from '../constants';

const initialState = {
    footerIndex : 'redTab'
}

export default function enthusiasm(state=initialState, action: FooterIndexAction) {
    switch (action.type) {
        case FOOTER_INDEX:
            return {...state, footerIndex: action.footerIndex};
    }
    return state;
}
