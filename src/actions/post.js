import { createAsyncThunk } from "@reduxjs/toolkit";

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

export const addPost = createAsyncThunk("action/add", async () => {
  return await delay(500, {
    title: "새 게시글",
    content: "내용",
  });
});
