import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";
import { REVIEWS_URL } from "../api/urls";

const initialState = {
  review: null,
  status: "idle",
  error: null,
};

export const fetchSingleReview = createAsyncThunk(
  "singleReview/fetchSingleReview",
  async (reviewName) => {
    try {
      const response = await axios.get(`${REVIEWS_URL}/${reviewName}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const singleReviewSlice = createSlice({
  name: "singleReview",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleReview.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSingleReview.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.review = action.payload;
      })
      .addCase(fetchSingleReview.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default singleReviewSlice.reducer;
