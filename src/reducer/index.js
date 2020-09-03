
import {combineReducers} from 'redux'
import counterReducer from './counter'
import loginReducer from './isLogin'

let allReducer = combineReducers({
    conterReducer :counterReducer,
    isLoggedReducer:loginReducer
})

export default allReducer