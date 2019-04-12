import * as constants from '../constants/index'


export interface FooterIndex {
    type: constants.FOOTER_INDEX;
}

export type FooterIndexAction = FooterIndex;

export function changeFooterIndex(): FooterIndex {
    return {
        type: constants.FOOTER_INDEX
    }
}

