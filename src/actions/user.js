import { createAsyncThunk } from "@reduxjs/toolkit";

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

export const logIn = createAsyncThunk("user/logIn", async (data, thunkAPI) => {
  console.log(data);
  const result = await delay(500, {
    userId: 1,
    nickname: "eyo",
  });
  return result;
});

// export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
// export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
// export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

// // async action creater --> 함수 return
// export const logIn = (data) => {
//   return (dispatch, getState) => {
//     dispatch(logInRequest(data));
//     try {
//       // axios.post().then().catch()으로 나중에 대체
//       setTimeout(() => {
//         dispatch(
//           logInSucess({
//             userId: 1,
//             nickname: "eyo",
//           })
//         );
//       }, 2000);
//     } catch (e) {
//       dispatch(logInFailute(e));
//     }
//   };
// };

// const logInRequest = (data) => {
//   return {
//     type: LOG_IN_REQUEST,
//     data,
//   };
// };

// const logInSucess = (data) => {
//   return {
//     type: LOG_IN_SUCCESS,
//     data,
//   };
// };

// const logInFailute = (error) => {
//   return {
//     type: LOG_IN_FAILURE,
//     error,
//   };
// };

// // sync action creater --> 객체 return

// export const logOut = () => {
//   return {
//     // action
//     type: "LOG_OUT",
//   };
// };
