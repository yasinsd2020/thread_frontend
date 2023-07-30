import { LOADING, TOSTIFY_POP_DOWN, TOSTIFY_POP_UP } from "../../const/global/global"

export const tostifyReducers = (state = {loading:true,message:null,type:null},{type,payload}) => {
    switch(type){
        case LOADING:
            return {loading:true,message:null,type:null}
        case TOSTIFY_POP_UP :
            return {loading:false,message:payload.message,type:payload?.type}
        case TOSTIFY_POP_DOWN :
            return {loading:false,message:false,type:false}
        default:
            return state
    }
}