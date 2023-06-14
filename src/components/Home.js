import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../actions/post";
import { logIn, logOut } from "../actions/user";
import { useCallback } from "react";

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const onClick = useCallback(() => {
    dispatch(logIn({ id: "eyo", password: "1234", admin: true }));
  }, [dispatch]);

  console.log(user);

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
        <button onClick={() => dispatch(logOut())}>logout</button>
      ) : (
        <button onClick={onClick}>login</button>
      )}
      <button
        onClick={() =>
          dispatch(addPost({ userId: 1, id: 1, content: "하이 헬로우" }))
        }
      >
        addpost
      </button>
    </>
  );
}
