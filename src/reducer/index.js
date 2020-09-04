
import {combineReducers} from 'redux'
import counterReducer from './counter'
import todoReducer from './todoReducer'

let allReducer = combineReducers({
    conterReducer :counterReducer,
    todoReducer:todoReducer
})

export default allReducer