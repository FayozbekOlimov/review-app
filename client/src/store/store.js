import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./signupSlice";
import loginReducer from "./loginSlice";
import reviewsReducer from "./reviewsSlice";
import singleReviewReducer from "./singleReviewSlice";

const store = configureStore({
  reducer: {
    signup: signupReducer,
    login: loginReducer,
    reviews: reviewsReducer,
    singleReview: singleReviewReducer,
  },
});

export default store;
