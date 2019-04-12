import {combineReducers} from "redux";
import count from './count'
import count2 from './count2'
import footer from './footer'

const rootReducer = combineReducers({
    count,
    count2,
    footer
})

export default rootReducer;