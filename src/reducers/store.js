// Store
import {combineReducers, createStore} from "redux";
import * as reducers from "./reducers";

const rs = combineReducers(
    reducers
)
const store = createStore(rs);
export default store;