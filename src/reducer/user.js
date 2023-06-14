import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
} from "../actions/user";

const initialState = {
  data: null,
  isLogInLoad: false,
};

const userReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...prevState,
        isLogInLoad: true,
        data: null,
      };
    case LOG_IN_SUCCESS:
      return {
        ...prevState,
        data: action.data,
        isLogInLoad: true,
      };
    case LOG_IN_FAILURE:
      return {
        ...prevState,
        isLogInLoad: false,
        data: null,
      };
    case "LOG_IN":
      return {
        ...prevState,
        data: action.data,
      };
    case "LOG_OUT":
      return {
        ...prevState,
        isLogInLoad: false,
        data: null,
      };
    default:
      return prevState;
  }
};

export default userReducer;
