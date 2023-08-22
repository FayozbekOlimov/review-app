import { Box, styled } from "@mui/material";

export const NavMenuBox = styled(Box)(({ theme, forphone }) => ({
  flexGrow: 2,
  display: forphone === "true" ? "flex" : "none",
  [theme.breakpoints.up("md")]: {
    display: forphone === "true" ? "none" : "flex",
  },
  gap: 1,
}));
