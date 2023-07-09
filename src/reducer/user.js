import { logIn } from "../actions/user";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  isLogInLoad: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut(state, action) {
      state.data = null;
    },
  },
  extraReducers: {
    [logIn.pending](state, action) {
      // user/logIn/pending
      state.isLogInLoad = true;
    },
    [logIn.fulfilled](state, action) {
      // user/logIn/fulfilled
      state.data = action.payload;
      state.isLogInLoad = false;
    },
    [logIn.rejected](state, action) {
      // user/logIn/rejected
      state.data = null;
      state.isLogInLoad = false;
    },
  },
});

export default userSlice;
