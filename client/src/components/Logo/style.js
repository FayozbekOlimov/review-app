import { styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const LogoWrapper = styled(Link)({
  display: "flex",
  alignItems: "center",
  color: "white",
  textDecoration: "none",
});

export const LogoText = styled(Typography)(({ theme }) => ({
  textDecoration: "none",
  color: "inherit",
  marginRight: theme.spacing(2),
  fontWeight: 700,
}));
