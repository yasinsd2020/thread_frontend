import { TOSTIFY_POP_DOWN } from "../../const/global/global"

export const closeTostifyAction = () => async (dispatch) => {
    dispatch({
        type : TOSTIFY_POP_DOWN,
        payload : null
    })
}