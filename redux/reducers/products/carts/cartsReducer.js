// export const productReduce = (state = {loading:true,singleProduct:{},products:[],error:null},{type,payload}) => {
//     switch(type){
//         case PRODUCT_LOADING:
//             return {loading:true,singleProduct:{},products:[],error:null}
//         case SINGEL_PRODUCT :
//             return {...state,loading:false,singleProduct:payload,products:[],error:null}
//         case LIST_OF_PRODUCTS :
//             return {...state,loading:false,singleProduct:{},products:payload,error:null}
//         case PRODUCT_ERROR : 
//             return {...state,loading:false,singleProduct:{},products:[],error:payload}
//         default:
//             return state
//     }
// }