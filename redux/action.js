import { AUTH } from "./const";

export const makeUserAuthenticated = () =>  async (dispatch) => {
    try {
        dispatch({
            type : AUTH,
            payload : true
        })
    } catch (error) {
       return  console.log(`something went wrong : ${error.message}`);
    }
} 

export const makeUserUnauthenticated = () =>  async (dispatch) => {
    try {
        dispatch({
            type : AUTH,
            payload : false
        })
    } catch (error) {
       return  console.log(`something went wrong : ${error.message}`);
    }
} 