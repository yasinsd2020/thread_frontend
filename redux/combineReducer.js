import {combineReducers,} from 'redux'
import { productReducers } from './reducers/products/productsReducer'
import { tostifyReducers } from './reducers/global/globalReducer'

export const reducers = combineReducers({
    products : productReducers,
    tostification : tostifyReducers
})