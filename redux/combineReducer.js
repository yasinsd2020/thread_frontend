import {combineReducers,} from 'redux'
import { productReducers } from './reducers/products/productsReducer'

export const reducers = combineReducers({
    products : productReducers
})