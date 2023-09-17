import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./auth/signupSlice";
import loginReducer from "./auth/loginSlice";
import reviewsReducer from "./review/reviewsSlice";
import singleReviewReducer from "./review/singleReviewSlice";
import createReviewReducer from "./review/createReviewSlice";

const store = configureStore({
  reducer: {
    signup: signupReducer,
    login: loginReducer,
    reviews: reviewsReducer,
    singleReview: singleReviewReducer,
    createReview: createReviewReducer,
  },
});

export default store;
