import {applyMiddleware, combineReducers, createStore} from "redux";
import shopPageReducer from "./shopsPageReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    shopsPage: shopPageReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;