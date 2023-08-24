import { Container, Grid } from "@mui/material";
import AppBar from "./components/AppBar";
import ReviewCard from "./components/ReviewCard";

const App = () => {
  return (
    <>
      <AppBar />
      <Container maxWidth="xl">
        <Grid container spacing={2} py={2}>
          {Array.from(Array(6)).map((_, ind) => (
            <Grid item xs={12} sm={6} lg={4} key={ind}>
              <ReviewCard />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default App;
