import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducer";

const firstMiddleware = (store) => (dispatch) => (action) => {
  console.log("액션로깅", action);
  dispatch(action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [firstMiddleware, ...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
