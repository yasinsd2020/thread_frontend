import { registrationApi } from "../../../apis/apis"
import { REGISTRAION_LOADING } from "../../const/athentications/registrationCont"
import { TOSTIFY_POP_UP, TOSTIFY_SUCCESS } from "../../const/global/global"

export const registrationAction=(login_requst_info)=>async(dispatch)=>{
    try {
        console.log('<<<<')

    dispatch( {
        type:REGISTRAION_LOADING,
        payload:true
    })
    const response=await registrationApi(login_requst_info)
    console.log({login_requst_info})
    if(response){
        dispatch({
            type : TOSTIFY_POP_UP,
            payload : { 
                    type : TOSTIFY_SUCCESS,
                    message : 'Product added to your cart successfully.'
                }
            })
        }
    } catch (error) {
        
    }
}