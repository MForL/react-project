import {createStore,combineReducers} from "redux";
import thunk from 'redux-thunk'; //处理异步action 
import reduxpromsie from "redux-promise";
import {applyMiddleware} from "redux";

import listreducer from "../Reducers";


const store = createStore(combineReducers({
	list:listreducer
}),applyMiddleware(thunk,reduxpromsie));


export default store;


//combineReducers:把多个reducer ,合并成一个大的 Reducer 