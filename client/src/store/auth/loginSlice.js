import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";
import { LOGIN_URL } from "../../api/urls";

const initialState = {
  user: null,
  status: "idle",
  error: null,
};

export const loginAsync = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    try {
      const response = await axios.post(LOGIN_URL, { email, password });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Login failed");
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { clearError } = loginSlice.actions;
export default loginSlice.reducer;
