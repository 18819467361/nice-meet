import * as constants from '../constants/index'


export interface FooterIndex {
    type: constants.FOOTER_INDEX;
    footerIndex:string;
}

export type FooterIndexAction = FooterIndex;

export function changeFooterIndex(footerIndex:string): FooterIndex {
    return {
        type: constants.FOOTER_INDEX,
        footerIndex
    }
}

