import { addToCartAPI, getAllCartProductAPI } from "../../../../apis/apis"
import { CART_PRODUCT,CART_PRODUCT_LOADING,CART_PRODUCT_ERROR } from "../../../const/products/cartConst/cart"
import { LOADING, TOSTIFY_ERROR, TOSTIFY_POP_UP, TOSTIFY_SUCCESS } from "../../../const/global/global"

export const addProductToCartAction = (user_id,variant_id,product_id) => async (dispatch) => {
    try{
        dispatch({
            type : CART_PRODUCT_LOADING,
            payload : true
        })

        var product_info =  await {
            user_id : '9' || user_id,
            variant_id : variant_id,
            product_id : product_id
        } 
        const apiResponse = await addToCartAPI(product_info)
    
        if(apiResponse){
            dispatch({
                type : TOSTIFY_POP_UP,
                payload : {
                    type : TOSTIFY_SUCCESS,
                    message : 'Product added to your cart successfully.'
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


// get wish list 

export const getCartAction = (user_id) => async (dispatch) => {
    try{
        dispatch({
            type : CART_PRODUCT_LOADING,
            payload : true
        })

        
        var product_info =  await {
            user_id : '9' || user_id,
        } 

        const apiResponse = await getAllCartProductAPI(product_info)
        dispatch({
            type : Wish_PRODUCT,
            payload : apiResponse.data.wishlist
        })


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