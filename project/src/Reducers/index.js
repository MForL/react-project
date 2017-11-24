import {combineReducers} from 'redux';
import ListReducer from './ListReducer'
const reducers = combineReducers({
	list:ListReducer
})

export default reducers;