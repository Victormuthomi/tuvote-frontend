// src/redux/features/vote/voteActions.js

import axios from "axios";

export const castVote = (votes) => async (dispatch, getState) => {
  try {
    const token = getState().auth.token; // Assuming you have the auth token saved in state

    // Make the API request to cast the vote
    const response = await axios.post(
      "/api/vote",
      { votes },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    // Dispatch success
    dispatch({ type: "VOTE_SUCCESS", payload: response.data });
  } catch (error) {
    // Dispatch failure
    dispatch({
      type: "VOTE_FAILURE",
      payload: error.response?.data?.message || "Error",
    });
  }
};
