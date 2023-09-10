import React from "react";
import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import SocialIconButton from "./SocialIconButton";
import { Link, useNavigate } from "react-router-dom";
import { Container, FormWrapper, SocialMediaWrapper } from "./style";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signupAsync, clearError } from "../../store/signupSlice";

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.signup);

  const onSubmit = (data) => {
    dispatch(signupAsync(data))
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Container maxWidth="xl">
      <FormWrapper elevation={3}>
        <Typography variant="h4" textAlign="center" mb={2}>
          Sign Up
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
                defaultValue=""
                name="firstName"
                control={control}
                rules={{ required: "First Name is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="First Name"
                    fullWidth
                    error={!!errors.firstName}
                    helperText={errors.firstName && errors.firstName.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                defaultValue=""
                name="lastName"
                control={control}
                rules={{ required: "Last Name is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Last Name"
                    fullWidth
                    error={!!errors.lastName}
                    helperText={errors.lastName && errors.lastName.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                defaultValue=""
                name="email"
                control={control}
                rules={{ required: "Email is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    fullWidth
                    type="email"
                    error={!!errors.email}
                    helperText={errors.email && errors.email.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                defaultValue=""
                name="password"
                control={control}
                rules={{ required: "Password is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Password"
                    fullWidth
                    type="password"
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
                {status === "loading" ? "Signing Up ..." : "Sign up"}
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
