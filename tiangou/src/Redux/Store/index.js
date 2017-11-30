import {createStore,combineReducers} from "redux";
import thunk from 'redux-thunk'; //处理异步action 
import reduxpromsie from "redux-promise";
import {applyMiddleware} from "redux";

import {listreducer, lovereducer} from "../Reducers";


const store = createStore(combineReducers({
	list:listreducer,
	love:lovereducer
}),applyMiddleware(thunk,reduxpromsie));


export default store;


//combineReducers:把多个reducer ,合并成一个大的 Reducer 