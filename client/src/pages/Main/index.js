import { Grid, Paper } from "@mui/material";
import ReviewCard from "../../components/ReviewCard";
import Tag from "../../components/Tag";
import Title from "../../components/Title";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllReviews } from "../../store/review/reviewsSlice";
import ReviewCardSkeleton from "../../components/Skeleton";

const Main = () => {
  const dispatch = useDispatch();
  const { latestReviews, topReviews, status, error } = useSelector(
    (state) => state.reviews
  );

  useEffect(() => {
    dispatch(fetchAllReviews());
  }, [dispatch, fetchAllReviews]);

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Title variant="h5">Latest Reviews</Title>
      <Grid container spacing={2} py={2}>
        {latestReviews?.length > 0
          ? latestReviews.map((review, ind) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={ind}>
                <ReviewCard {...review} />
              </Grid>
            ))
          : Array.from(new Array(4)).map((_, ind) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={ind}>
                <ReviewCardSkeleton />
              </Grid>
            ))}
      </Grid>

      <Title variant="h5">Top Reviews</Title>
      <Grid container spacing={2} py={2}>
        {topReviews?.length > 0
          ? topReviews.map((review, ind) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={ind}>
                <ReviewCard {...review} />
              </Grid>
            ))
          : Array.from(new Array(4)).map((_, ind) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={ind}>
                <ReviewCardSkeleton />
              </Grid>
            ))}
      </Grid>

      <Title variant="h5">Tag Cloud</Title>
      <Paper sx={{ p: 2, my: 2 }}>
        <Grid container spacing={2} justifyContent="space-evenly">
          {[
            "Puzzle",
            "Adventure",
            "Science-Fiction",
            "Self-help",
            "Fantasy",
          ].map((tag, index) => (
            <Grid item key={index}>
              <Tag label={tag} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </>
  );
};

export default Main;
