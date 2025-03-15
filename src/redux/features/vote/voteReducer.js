// src/redux/features/vote/voteReducer.js

const initialState = {
  loading: false,
  error: null,
  success: false,
};

const voteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "VOTE_SUCCESS":
      return { ...state, loading: false, success: true, error: null };
    case "VOTE_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
      };
    default:
      return state;
  }
};

export default voteReducer;
