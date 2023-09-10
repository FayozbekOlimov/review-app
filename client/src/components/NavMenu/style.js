import { Box, styled } from "@mui/material";

export const NavMenuBox = styled(Box)(({ theme }) => ({
  // flexGrow: 2,
  display: "flex",
  // [theme.breakpoints.up("md")]: {
  //   display: forphone === "true" ? "none" : "flex",
  // },
  gap: 1,
}));
