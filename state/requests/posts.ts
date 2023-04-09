import { createAsyncThunk } from "@reduxjs/toolkit";
import { backendUrl } from "../../variables/environment-variables";

export const getPosts = createAsyncThunk(
  "posts/get",
  async (some: null | void, { rejectWithValue }) => {
    try {
      const res = await fetch(`${backendUrl}/api/v1/posts`);
      const data = await res.json();
      if (!data) {
        return rejectWithValue("No data returned");
      }
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addPost = createAsyncThunk(
  "posts/add",
  async (formData: FormData, { rejectWithValue }) => {
    try {
      const res = await fetch(`${backendUrl}/api/v1/posts`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!data) return rejectWithValue("No data returned");
      if (!data.length) return rejectWithValue(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
