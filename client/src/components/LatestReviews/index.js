import { Container, Grid, styled, Typography } from "@mui/material";
import ReviewCard from "../ReviewCard";
import Title from "../Title";

const LatestReviews = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: { xs: 20, md: 12 } }}>
      <Title variant="h4">Latest Reviews</Title>
      <Grid container spacing={2} py={2}>
        {Array.from(Array(6)).map((_, ind) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={ind}>
            <ReviewCard />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LatestReviews;
