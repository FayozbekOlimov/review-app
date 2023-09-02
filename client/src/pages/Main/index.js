import { Container, Grid, Paper } from "@mui/material";
import ReviewCard from "../../components/ReviewCard";
import Tag from "../../components/Tag";
import Title from "../../components/Title";

const Main = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: { xs: 20, md: 12 } }}>
      <Title variant="h5">Latest Reviews</Title>
      <Grid container spacing={2} py={2}>
        {Array.from(Array(4)).map((_, ind) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={ind}>
            <ReviewCard />
          </Grid>
        ))}
      </Grid>

      <Title variant="h5">Top Reviews</Title>
      <Grid container spacing={2} py={2}>
        {Array.from(Array(4)).map((_, ind) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={ind}>
            <ReviewCard />
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
    </Container>
  );
};

export default Main;
