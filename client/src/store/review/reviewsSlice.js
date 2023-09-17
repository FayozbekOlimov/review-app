import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";
import { REVIEWS_URL } from "../../api/urls";

const initialState = {
  allReviews: [],
  latestReviews: [],
  topReviews: [],
  status: "idle",
  error: null,
};

export const fetchAllReviews = createAsyncThunk(
  "reviews/fetchAllReviews",
  async () => {
    try {
      const response = await axios.get(REVIEWS_URL);
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch reviews"
      );
    }
  }
);

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
        state.allReviews = action.payload;

        state.latestReviews = [...action.payload].sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });

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
