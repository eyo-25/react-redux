import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducer";

const initialState = {
  user: {
    data: null,
    isLogInLoad: false,
  },
  posts: [],
};

const firstMiddleware = (store) => (dispatch) => (action) => {
  console.log("액션로깅", action);
  dispatch(action);
};

const thunkMiddleware = (store) => (dispatch) => (action) => {
  //액션이 함수일때 (비동기인 경우) thunk가 함수를 실행시키도록함
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }
  // 기본동작
  return dispatch(action);
};

const enhancer = applyMiddleware(firstMiddleware, thunkMiddleware);

const store = createStore(rootReducer, initialState, enhancer);

export default store;
