import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import SocialIconButton from "../SignUp/SocialIconButton";
import { Link, useNavigate } from "react-router-dom";
import { Container, FormWrapper, SocialMediaWrapper } from "../SignUp/style";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../../store/loginSlice";

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.login);

  const onSubmit = async (data) => {
    try {
      await dispatch(loginAsync(data)).unwrap();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container maxWidth="xl">
      <FormWrapper elevation={3}>
        <Typography variant="h4" textAlign="center" mb={2}>
          Login
        </Typography>
        {status === "failed" && (
          <Typography variant="body2" textAlign="center" color="error" mb={2}>
            {error}
          </Typography>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{ required: "Email is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email && errors.email.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{ required: "Password is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Password"
                    type="password"
                    fullWidth
                    error={!!errors.password}
                    helperText={errors.password && errors.password.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={status === "loading"}
              >
                {status === "loading" ? "Logging In..." : "Login"}
              </Button>
            </Grid>
          </Grid>
        </form>
        <Divider sx={{ mt: 2, fontWeight: 500 }}>OR</Divider>
        <SocialMediaWrapper>
          <SocialIconButton icon={TwitterIcon} color="#29AAE3" />
          <SocialIconButton icon={FacebookIcon} color="#4D6BB3" />
          <SocialIconButton icon={GoogleIcon} color="#4586F4" />
        </SocialMediaWrapper>
        <Typography variant="body2" textAlign="center">
          Need an account{" "}
          <Link to="/signup" style={{ color: "inherit" }}>
            SIGN UP
          </Link>
        </Typography>
      </FormWrapper>
    </Container>
  );
};

export default Login;
