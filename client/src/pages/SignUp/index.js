import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
import { Container, FormWrapper, SocialMediaWrapper } from "./style";
import SocialIconButton from "./SocialIconButton";

const SignUp = () => {
  return (
    <Container maxWidth="xl">
      <FormWrapper elevation={3}>
        <Typography variant="h4" textAlign="center" mb={2}>
          Sign Up
        </Typography>
        <Box component="form">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField label="First Name" fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Last Name" fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Email" fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Password" type="password" fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" fullWidth>
                Sign up
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Divider sx={{ mt: 2, fontWeight: 500 }}>OR</Divider>
        <SocialMediaWrapper>
          <SocialIconButton icon={FacebookIcon} color="#4D6BB3" />
          <SocialIconButton icon={TwitterIcon} color="#29AAE3" />
          <SocialIconButton icon={LinkedInIcon} color="#167AB7" />
        </SocialMediaWrapper>
        <Typography variant="body2" textAlign="center">
          Already have an account{" "}
          <Link to="/login" style={{ color: "inherit" }}>
            LOGIN
          </Link>
        </Typography>
      </FormWrapper>
    </Container>
  );
};

export default SignUp;
