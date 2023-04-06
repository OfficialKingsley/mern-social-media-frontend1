import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { login, register } from "./requests/auth";
import { IUser } from "../types/IUser";

type InitialAuthState = {
  user;
  token: string | null;
  authState: "success" | "error" | "pending";
};

const initialState: InitialAuthState = {
  user: null,
  token: null,
  authState: "pending",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action: PayloadAction<IUser>) => {
      state.token = action.payload.token;
      state.user = action.payload;
      state.authState = "success";
    });

    builder.addCase(login.pending, (state, action: PayloadAction) => {
      state.authState = "pending";
    });
    builder.addCase(login.rejected, (state, action) => {
      state.authState = "error";
    });

    builder.addCase(
      register.fulfilled,
      (state, action: PayloadAction<IUser>) => {
        state.authState = "success";
      }
    );

    builder.addCase(register.pending, (state, action: PayloadAction) => {
      state.authState = "pending";
    });
    builder.addCase(register.rejected, (state, action) => {
      state.authState = "error";
    });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
