import {combineReducers,} from 'redux'
import { productReducers } from './reducers/products/productsReducer'
import { tostifyReducers } from './reducers/global/globalReducer'
import { wishListReducers } from './reducers/products/wishlistReducer/wishList'

export const reducers = combineReducers({
    products : productReducers,
    wishlist: wishListReducers,
    tostification : tostifyReducers
})




