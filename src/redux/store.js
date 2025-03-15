// src/redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import userReducer from "./features/user/userSlice";
import voteReducer from "./features/vote/voteReducer"; // Import voteReducer

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    vote: voteReducer, // Add vote reducer
  },
});
