import {combineReducers} from 'redux'
import userReducer from './userReducer'
import tripsReducer from './tripsReducer'

export default combineReducers({user: userReducer, trips: tripsReducer})