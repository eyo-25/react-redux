import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
} from "../actions/user";
import { produce } from "immer";

const initialState = {
  data: null,
  isLogInLoad: false,
};

const userReducer = (prevState = initialState, action) => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.data = null;
        draft.isLogInLoad = true;
        break;
      case LOG_IN_SUCCESS:
        draft.data = action.data;
        draft.isLogInLoad = true;
        break;
      case LOG_IN_FAILURE:
        draft.data = null;
        draft.isLogInLoad = false;
        break;
      case "LOG_IN":
        draft.data = action.data;
        break;
      case "LOG_OUT":
        draft.data = null;
        draft.isLogInLoad = false;
        break;
      default:
        return prevState;
    }
  });
};

export default userReducer;
