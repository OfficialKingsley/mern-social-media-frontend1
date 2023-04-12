import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { login, register, verifyToken } from "./requests/auth";
import { IUser } from "../types/IUser";
import { refetchUser } from "./requests/users";

type InitialAuthState = {
  user: IUser | null;
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

    builder.addCase(register.fulfilled, (state) => {
      state.authState = "success";
    });

    builder.addCase(register.pending, (state) => {
      state.authState = "pending";
    });
    builder.addCase(register.rejected, (state) => {
      state.authState = "error";
    });

    builder.addCase(
      verifyToken.fulfilled,
      (state, action: PayloadAction<IUser>) => {
        state.authState = "success";
        state.user = action.payload;
        state.token = action.payload.token;
      }
    );

    builder.addCase(verifyToken.pending, (state) => {
      state.authState = "pending";
    });

    builder.addCase(verifyToken.rejected, (state) => {
      state.authState = "error";
    });
    builder.addCase(refetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.authState = "success";
    });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
