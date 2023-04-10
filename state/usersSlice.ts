import { createSlice } from "@reduxjs/toolkit";
import { getProfileUser } from "./requests/users";
import { getSpecificUserPosts } from "./requests/posts";

const usersSlice = createSlice({
  name: "users",
  reducers: {},
  initialState: {
    profileUser: null,
    allUsers: null,
    usersState: "success",
    specificUserPosts: [],
  },
  extraReducers(builder) {
    builder.addCase(getProfileUser.fulfilled, (state, action) => {
      state.profileUser = action.payload;
    });
    builder.addCase(getSpecificUserPosts.fulfilled, (state, action) => {
      state.specificUserPosts = action.payload;
    });
  },
});

export default usersSlice.reducer;
