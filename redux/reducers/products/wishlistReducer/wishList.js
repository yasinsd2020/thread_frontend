import { Wish_PRODUCT, Wish_PRODUCT_ERROR, Wish_PRODUCT_LOADING ,WISH_PRODUCT_REFTECH} from '../../../const/products/wishList/wishListConst';

export const wishListReducers = (state = {loading:true,refetch:true,WishProduct:[],error:null},{type,payload}) => {
    switch(type){
        case Wish_PRODUCT_LOADING:
            return {loading:true,WishProduct:[],error:null}
        case Wish_PRODUCT :
            return {...state,loading:false,refetch:false,WishProduct:payload,error:null}
        case Wish_PRODUCT_ERROR : 
            return {...state,loading:false,refetch:false,WishProduct:[],error:payload}
        default:
            return state
    }
}