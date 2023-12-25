import { REGISTRAION_RESPONS,REGISTRAION_ERROR,REGISTRAION_LOADING, LOGIN_LOADING, LOGIN_SUCCESS } from '../../const/athentications/registrationCont'
export const registrationReducer=(state={error:null,loading:false,registration:{}},{type,payload})=>{
    switch(type){
        case REGISTRAION_LOADING :
      return  {error:null,loading:payload,registration:null}
        case REGISTRAION_RESPONS:
            return {...state,error:null,registration:payload,loading:false}
        case REGISTRAION_ERROR:
            return {...state,error:payload,registration:null,loading:flase}
            default :return state
    }
}


export const logingReducer=(state={error:null,loading:false,login_response:[]},{type,payload})=>{
    switch(type){
        case LOGIN_LOADING :
      return  {error:null,loading:payload,login_response:null}
        case LOGIN_SUCCESS:
            return {...state,error:null,login_response:payload,loading:false}
        case REGISTRAION_ERROR:
            return {...state,error:payload,login_response:null,loading:flase}
            default :return state
    }
}