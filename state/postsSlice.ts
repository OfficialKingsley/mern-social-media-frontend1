import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { addPost, getPosts, likePost } from "./requests/posts";
import { IPost } from "../types/IPost";
import store from ".";
type PostsState = {
  posts: IPost[];
  postsState: "success" | "pending" | "error";
};

const initialState: PostsState = { posts: [], postsState: "pending" };
const postSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      getPosts.fulfilled,
      (state, action: PayloadAction<IPost[]>) => {
        state.posts = action.payload;
        state.postsState = "success";
      }
    );
    builder.addCase(getPosts.pending, (state) => {
      state.postsState = "pending";
    });
    builder.addCase(getPosts.rejected, (state) => {
      state.postsState = "error";
    });
    builder.addCase(
      addPost.fulfilled,
      (state, action: PayloadAction<IPost>) => {
        state.postsState = "success";
        console.log(state.posts);
      }
    );
    builder.addCase(addPost.pending, (state, action) => {
      state.postsState = "pending";
    });
    builder.addCase(addPost.rejected, (state, action) => {
      state.postsState = "error";
    });
    builder.addCase(likePost.fulfilled, (state, action) => {
      state.postsState = "success";
    });
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
