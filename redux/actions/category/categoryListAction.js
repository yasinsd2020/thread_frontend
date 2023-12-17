import { getCategoryListApi } from "../../../apis/apis"
import { CATEGORY_ERROR, CATEGORY_LIST, CATEGORY_LOADING } from "../../const/categoryConst/categoryConst"
import { TOSTIFY_ERROR, TOSTIFY_POP_UP } from "../../const/global/global"

export const   getCategoryListAction =()=>async(dispatch)=>{
    try {
         dispatch( {
             type:CATEGORY_LOADING,
             payload:true
         })
         const category_info={

         }

         const response = await getCategoryListApi()
        dispatch({
            type:CATEGORY_LIST,
            payload:response?.data?.categories
        })
         

    } catch (error) {
        dispatch({
            type : TOSTIFY_POP_UP,
            payload : {
                type : TOSTIFY_ERROR,
                message : `Something went wrong : ${err.message}`
            }
        })
        
    }

}