import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { login } from "./requests/auth";

type InitialAuthState = {
  user;
  token: string | null;
  loggedInState: "logged-in" | "pending" | "not-logged-in";
};

const initialState: InitialAuthState = {
  user: null,
  token: null,
  loggedInState: "not-logged-in",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action: PayloadAction<IUser>) => {
      state.token = action.payload.token;
      state.user = action.payload;
      state.loggedInState = "logged-in";
    });

    builder.addCase(login.pending, (state, action: PayloadAction) => {
      state.loggedInState = "pending";
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loggedInState = "not-logged-in";
    });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
