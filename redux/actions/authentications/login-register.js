import { loginApi, registrationApi } from "../../../apis/apis";
import { REGISTRAION_LOADING } from "../../const/athentications/registrationCont";
import {
  TOSTIFY_ERROR,
  TOSTIFY_POP_UP,
  TOSTIFY_SUCCESS,
} from "../../const/global/global";

export const registrationAction = (login_requst_info) => async (dispatch) => {
  dispatch({
    type: REGISTRAION_LOADING,
    payload: true,
  });
  const response = await registrationApi(login_requst_info);

  if (!response?.data?.status) {
    return dispatch({
      type: TOSTIFY_POP_UP,
      payload: {
        type: TOSTIFY_ERROR,
        message: `Something went wrong : ${response?.data?.message}`,
      },
    });
  }

  return dispatch({
    type: TOSTIFY_POP_UP,
    payload: {
      type: TOSTIFY_SUCCESS,
      message: "Your account has been successfully registered.",
    },
  });
};

export const loginAction = (login_requst_info) => async (dispatch) => {
  dispatch({
    type: REGISTRAION_LOADING,
    payload: true,
  });
  const response = await loginApi(login_requst_info);
  if (response?.status) {
    dispatch({
      type: TOSTIFY_POP_UP,
      payload: {
        type: TOSTIFY_SUCCESS,
        message: "Your account has been logged in successfully",
      },
    });
  } else {
    dispatch({
      type: TOSTIFY_POP_UP,
      payload: {
        type: TOSTIFY_ERROR,
        message: `Something went wrong : ${response?.message}`,
      },
    });
  }
};
