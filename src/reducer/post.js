import { produce } from "immer";

const initialState = {
  posts: [],
};

const postReducer = (prevState = initialState, action) => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      case "ADD_POST":
        draft.push(action.data);
        break;
      default:
        return prevState;
    }
  });
};

export default postReducer;
