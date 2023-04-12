import { createAsyncThunk } from "@reduxjs/toolkit";
import { backendUrl } from "../../variables/environment-variables";
import store from "..";

export const getProfileUser = createAsyncThunk(
  "users/getProfileUser",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await fetch(`${backendUrl}/api/v1/users/${id}`);
      const foundUser = await res.json();
      console.log(foundUser);
      return foundUser;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const refetchUser = createAsyncThunk(
  "users/getUser",
  async (value: null, { rejectWithValue }) => {
    const id = store.getState().auth.user._id;
    try {
      const res = await fetch(`${backendUrl}/api/v1/users/${id}`);
      const foundUser = await res.json();
      console.log(foundUser);
      return foundUser;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
