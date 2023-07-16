import { AUTH } from "./const";

export const authenticationReducer = (state = {isAuth : false}, {type,payload}) => {
    switch(type){
        case AUTH:
            return state = {isAuth : payload}
        default:
            return state
    }
} 