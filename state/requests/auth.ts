import { createAsyncThunk } from "@reduxjs/toolkit";
import { backendUrl } from "../../variables/environment-variables";

export const login = createAsyncThunk(
  "auth/login",
  async (
    { username, password }: { username: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await fetch(`${backendUrl}/api/v1/auth/login`, {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!data) {
        return rejectWithValue("No data was returned");
      }
      if (!data._id) {
        return rejectWithValue(data);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (
    {
      firstName,
      lastName,
      username,
      email,
      password,
    }: {
      firstName: string;
      lastName: string;
      username: string;
      email: string;
      password: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const res = await fetch(`${backendUrl}/api/v1/auth/register`, {
        method: "POST",
        body: JSON.stringify({
          firstName,
          lastName,
          username,
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!data._id) {
        return rejectWithValue(data);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
