import { CATEGORY_ERROR,CATEGORY_LIST,CATEGORY_LOADING } from "../../const/categoryConst/categoryConst"
export const categoryReducer=(state={error:null,loading:false,categoryList:[]},{type,payload})=>{
    switch(type){
        case CATEGORY_LOADING :
      return  {error:null,loading:payload,categoryList:[]}
        case CATEGORY_LIST:
            return {...state,error:null,categoryList:payload,loading:false}
        case CATEGORY_ERROR:
            return {...state,error:payload,categoryList:[],loading:flase}

            default :return state
    }
}