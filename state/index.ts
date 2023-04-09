import { configureStore } from "@reduxjs/toolkit";
import auth from "./authSlice";
import posts from "./postsSlice";
import { createWrapper } from "next-redux-wrapper";
const store = configureStore({
  reducer: {
    auth,
    posts,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
