import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../actions/post";
import { logIn } from "../actions/user";
import { useCallback } from "react";
import userSlice from "../reducer/user";

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const onClick = useCallback(() => {
    dispatch(logIn({ id: "eyo", password: "1234" }));
  }, [dispatch]);

  const logOut = useCallback(() => {
    dispatch(userSlice.actions.logOut());
  }, []);

  const onClickHandler = useCallback(() => {
    dispatch(addPost());
  }, []);

  return (
    <>
      <div>
        {user.isLogInLoad ? (
          user.data ? (
            <div>{user.data.nickname}</div>
          ) : (
            "로그인중"
          )
        ) : (
          "로그인 해주세요"
        )}
      </div>
      {user.data ? (
        <button onClick={logOut}>logout</button>
      ) : (
        <button onClick={onClick}>login</button>
      )}
      <button onClick={onClickHandler}>게시글 작성</button>
    </>
  );
}
