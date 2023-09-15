import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";
import { REVIEWS_URL } from "../api/urls";

// Define an initial state for reviews
const initialState = {
  // allReviews: [],
  latestReviews: [],
  topReviews: [],
  status: "idle",
  error: null,
};

// Create an async thunk for fetching all reviews
export const fetchAllReviews = createAsyncThunk(
  "reviews/fetchAllReviews",
  async () => {
    const response = await axios.get(REVIEWS_URL);
    return response.data;
  }
);

// Create a slice for reviews
const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllReviews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllReviews.fulfilled, (state, action) => {
        state.status = "succeeded";
        // state.allReviews = action.payload;

        // Sort reviews by date to get the latest
        state.latestReviews = [...action.payload].sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });

        // Sort reviews by rating to get the top
        state.topReviews = [...action.payload].sort((a, b) => {
          return b.grade - a.grade;
        });
      })
      .addCase(fetchAllReviews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default reviewsSlice.reducer;
