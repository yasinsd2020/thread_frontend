import { CART_PRODUCT,CART_PRODUCT_LOADING,CART_PRODUCT_ERROR } from "../../../const/products/cartConst/cart"
export const cartReducer = (state = {loading:true,CartList:[],error:null},{type,payload}) => {
    switch(type){
        case CART_PRODUCT_LOADING:
            return {loading:true,CartList:[],error:null}
        case CART_PRODUCT :
            return {...state,loading:false,CartList:payload,error:null}
        case CART_PRODUCT_ERROR :
            return {...state,loading:false,CartList:[],error:payload}
        default:
            return state
    }
}