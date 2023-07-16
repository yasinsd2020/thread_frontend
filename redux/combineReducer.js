import {combineReducers,} from 'redux'
import { authenticationReducer } from './reducer'

export const reducers = combineReducers({
    authentication : authenticationReducer
})