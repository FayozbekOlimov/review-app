import { useEffect, useState } from "react";
import { Box, Grid, Rating, Typography } from "@mui/material";
import {
  Image,
  MainReviewContent,
  OverallRatingBox,
  ReviewDetails,
  Span,
  StickySidebar,
} from "./style";
import OverallRate from "./OverallRate";
import PercentageBar from "./PercentageBar";
import Comments from "./Comments";
import Tag from "../../components/Tag";
import { format } from "date-fns";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleReview } from "../../store/review/singleReviewSlice";

const Review = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const dispatch = useDispatch();
  const { review, status, error } = useSelector((state) => state.singleReview);

  useEffect(() => {
    dispatch(fetchSingleReview(id));
  }, [id, fetchSingleReview, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  if (!review) {
    return <div>Review not found</div>;
  }

  return (
    <Box display="flex" flexWrap="wrap">
      <StickySidebar>
        <Image src={review?.image} alt="book" />
        <Rating
          value={value}
          onChange={(_, newValue) => {
            setValue(newValue);
          }}
          size="large"
        />
        <Typography variant="h6">Rate this Review</Typography>
      </StickySidebar>
      <MainReviewContent>
        <Typography variant="h4">{review?.reviewName}</Typography>
        <Typography variant="h6" fontWeight={400} fontStyle="italic">
          {review?.author_id}
        </Typography>

        <ReviewDetails>
          <Typography variant="body2">
            <Span>{review?.grade}</Span> grade
          </Typography>
          <Typography variant="body2">
            <Span>2</Span> ratings
          </Typography>
          <Typography variant="body2">
            <Span>8</Span> likes
          </Typography>
          <Typography variant="body2">
            <Span>2</Span> comments
          </Typography>
        </ReviewDetails>

        <Typography variant="body1" py={1}>
          {review?.reviewText}
        </Typography>

        <Typography variant="body2" fontStyle="italic" textAlign="right">
          {format(new Date(review?.date), "dd MMMM, yyyy")}
        </Typography>

        <Grid container my={1} spacing={1}>
          {review?.tags.map((tag, index) => (
            <Grid item key={index}>
              <Tag label={tag} />
            </Grid>
          ))}
        </Grid>

        <OverallRatingBox elevation={3}>
          <OverallRate rate={4.6} />
          <Box width="100%">
            <PercentageBar percentage={45} stars={5} />
            <PercentageBar percentage={37} stars={4} />
            <PercentageBar percentage={12} stars={3} />
            <PercentageBar percentage={3} stars={2} />
            <PercentageBar percentage={3} stars={1} />
          </Box>
        </OverallRatingBox>

        <Comments />
      </MainReviewContent>
    </Box>
  );
};

export default Review;
