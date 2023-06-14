const initialState = {
  posts: [],
};

const postReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...prevState.posts, action.data];
    default:
      return prevState;
  }
};

export default postReducer;
