import {createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk'; //处理异步action 
import reduxpromsie from "redux-promise";
import {applyMiddleware} from "redux";



// const store = createStore(combineReducers({}),applyMiddleware(thunk,reduxpromsie))



export default store;