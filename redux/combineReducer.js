import {combineReducers,} from 'redux'
import { productReducers } from './reducers/products/productsReducer'
import { tostifyReducers } from './reducers/global/globalReducer'
import { wishListReducers } from './reducers/products/wishlistReducer/wishList'
import { cartReducer } from './reducers/products/carts/cartsReducer'
import { categoryReducer } from './reducers/categoryReducer/categoryReducer'

export const reducers = combineReducers({
    products : productReducers,
    wishlist: wishListReducers,
    cartReducer:cartReducer,
    tostification : tostifyReducers,
    categoryList : categoryReducer
})




