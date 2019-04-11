import reducer from '../reducers/index';
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'; // 开发环境看state树


const store = createStore(reducer, composeWithDevTools(
        applyMiddleware(),
    ));
export default store