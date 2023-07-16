import {  getListOfProductAPI, getSingleProductAPI } from "../../../apis/apis"
import { LIST_OF_PRODUCTS, PRODUCT_ERROR, PRODUCT_LOADING, SINGEL_PRODUCT } from "../../const/products/productsConst"

export const getSingleProductAction = (productId) => async (dispatch) => {
    try{
        console.log(productId,'productId');
        dispatch({
            type : PRODUCT_LOADING,
            payload : true
        })

        const apiResponse = await getSingleProductAPI(productId)
    
        dispatch({
            type : SINGEL_PRODUCT,
            payload : apiResponse.data.products
        })


    }catch(err){
        dispatch({
            type : PRODUCT_ERROR,
            payload : `Something went wrong : ${err.message}`
        })
    }
}

export const getListOfProductAction = () => async (dispatch) => {
    try{
        dispatch({
            type : PRODUCT_LOADING
        })

        const apiResponse = await getListOfProductAPI()

        dispatch({
            type : LIST_OF_PRODUCTS,
            payload : apiResponse.data.products
        })


    }catch(err){
        dispatch({
            type : PRODUCT_ERROR,
            payload : `Something went wrong : ${err.message}`
        })
    }
}