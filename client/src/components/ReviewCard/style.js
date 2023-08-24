import { styled, Typography } from "@mui/material";

export const ReviewText = styled(Typography)(({ theme }) => ({
  width: "100%",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3,
  overflow: "hidden",
  color: theme.palette.text.secondary,
}));
