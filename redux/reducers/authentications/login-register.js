import { REGISTRAION_RESPONS,REGISTRAION_ERROR,REGISTRAION_LOADING } from '../../const/athentications/registrationCont'
export const registrationReducer=(state={error:null,loading:false,registration:[]},{type,payload})=>{
    switch(type){
        case REGISTRAION_LOADING :
      return  {error:null,loading:payload,registration:[]}
        case REGISTRAION_RESPONS:
            return {...state,error:null,registration:payload,loading:false}
        case REGISTRAION_ERROR:
            return {...state,error:payload,registration:[],loading:flase}
            default :return state
    }
}