import { createSlice } from "@reduxjs/toolkit";
import { addPost } from "../actions/post";

const initialState = {
  data: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    clearPosts(state, action) {
      state.data = [];
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(addPost.pending, (state, action) => {})
      .addCase(addPost.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(addPost.rejected, (state, action) => {})
      .addMatcher(
        (state, action) => {
          return action.type.includes("/pending");
        },
        (state, action) => {
          state.isLoding = true;
        }
      ),
});

export default postSlice;
