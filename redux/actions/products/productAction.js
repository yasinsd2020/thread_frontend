import {  getListOfNewArivelApi, getAll_SingleProductAPI } from "../../../apis/apis"
import { LIST_OF_PRODUCTS, PRODUCT_ERROR, PRODUCT_LOADING, SINGEL_PRODUCT } from "../../const/products/productsConst"

export const getAll_SingleProductAction = ({variant_productId,user_id, keyword,category_id

}) => async (dispatch) => {
    try{
        const product_info=await {
            variant_id:variant_productId,
            keyword:keyword,
            user_id:user_id,
            category_id:category_id
        }
        dispatch({
            type : PRODUCT_LOADING,
            payload : true
        })

        const apiResponse = await getAll_SingleProductAPI(product_info)
        if(product_info?.variant_id){
            dispatch({
                type : SINGEL_PRODUCT,
                payload : apiResponse.data.products
            })
        }else{
            dispatch({
                type : LIST_OF_PRODUCTS ,
                payload : apiResponse.data.products
            })
        }
        


    }catch(err){
        dispatch({
            type : PRODUCT_ERROR,
            payload : `Something went wrong : ${err.message}`
        })
    }
}

export const getList_NewArivelAction = () => async (dispatch) => {
    try{
        dispatch({
            type : PRODUCT_LOADING
        })
     
        const apiResponse = await getListOfNewArivelApi()

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