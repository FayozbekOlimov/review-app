import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SIGNUP_URL } from "../../api/urls";
import axios from "../../api/axios";

const initialState = {
  user: null,
  status: "idle",
  error: null,
};

export const signupAsync = createAsyncThunk("auth/signup", async (userData) => {
  try {
    const response = await axios.post(SIGNUP_URL, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Registration failed");
  }
});

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signupAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signupAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { clearError } = signupSlice.actions;
export default signupSlice.reducer;
