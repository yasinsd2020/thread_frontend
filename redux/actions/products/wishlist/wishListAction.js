import {addToWishListAPI,getWishListAPI, removeWishListAPI} from '../../../../apis/apis'
import { LOADING, TOSTIFY_ERROR, TOSTIFY_POP_UP, TOSTIFY_SUCCESS } from "../../../const/global/global"
import {Wish_PRODUCT,Wish_PRODUCT_LOADING,Wish_PRODUCT_ERROR,WISH_PRODUCT_REFTECH} from '../../../const/products/wishList/wishListConst'

// add wish-list action
export const addWishListAction = (user_id,variant_id,product_id) => async (dispatch) => {
    try{
        dispatch({
            type : Wish_PRODUCT_LOADING,
            payload : true
        })

        var product_info =  await {
            user_id : '9' || user_id,
            variant_id : variant_id,
            product_id : product_id
        } 
        const apiResponse = await addToWishListAPI(product_info)
    
        if(apiResponse){
            dispatch({
                type : TOSTIFY_POP_UP,
                payload : {
                    type : TOSTIFY_SUCCESS,
                    message : 'Product added to your wishList successfully.'
                }
            })
        }

    }catch(err){
        dispatch({
            type : TOSTIFY_POP_UP,
            payload : {
                type : TOSTIFY_ERROR,
                message : `Something went wrong : ${err.message}`
            }
        })
    }
}

// remove wish-list action
export const removeWishListAction = ({wishlist_id}) => async (dispatch) => {
    try{
        dispatch({
            type : Wish_PRODUCT_LOADING,
            payload : true
        })

        

        var product_info =  await {
            wishlist_id:wishlist_id.wishId,
            user_id:wishlist_id.userId
        } 
        const apiResponse = await removeWishListAPI(product_info)
    
        if(apiResponse){
         await   dispatch({
                type : TOSTIFY_POP_UP,
                payload : {
                    type : TOSTIFY_SUCCESS,
                    message : 'Product remove successfully from wishList .'
                }
            })
            const apiResponse = await getWishListAPI(product_info)
            console.log('user_id',apiResponse);
           await dispatch({
                type : Wish_PRODUCT,
                payload : apiResponse.data.wishlist
            })
    
        }

    }catch(err){
        dispatch({
            type : TOSTIFY_POP_UP,
            payload : {
                type : TOSTIFY_ERROR,
                message : `Something went wrong : ${err.message}`
            }
        })
    }
}

// get wish list 

export const getWishListAction = (user_id) => async (dispatch) => {
    try{
        dispatch({
            type : Wish_PRODUCT_LOADING,
            payload : true
        })

        dispatch({
            type :  WISH_PRODUCT_REFTECH,
            payload : true
        })
        
        var product_info =  await {
            user_id : '9' || user_id,
        } 

        const apiResponse = await getWishListAPI(product_info)
        dispatch({
            type : Wish_PRODUCT,
            payload : apiResponse.data.wishlist
        })


    }catch(err){
        dispatch({
            type : Wish_PRODUCT_ERROR,
            payload : `Something went wrong : ${err.message}`
        })
    }
}