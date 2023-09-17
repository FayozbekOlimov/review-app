import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";
import { CREATE_REVIEW_URL, REVIEWS_URL } from "../../api/urls";

export const createReview = createAsyncThunk(
  "createReview/createReview",
  async (reviewData) => {
    try {
      const response = await axios.post(REVIEWS_URL, reviewData);
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to create the review"
      );
    }
  }
);

const createReviewSlice = createSlice({
  name: "createReview",
  initialState: {
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createReview.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createReview.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(createReview.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default createReviewSlice.reducer;
