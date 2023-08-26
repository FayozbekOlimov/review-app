import { Box, styled } from "@mui/material";

export const MainReviewContent = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2),
  paddingTop: 0,
}));

export const OverallRatingBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

export const StickySidebar = styled(Box)(({ theme }) => ({
  flex: "0 0 25%",
  position: "sticky",
  top: "96px",
  height: `calc(100vh - 100px)`,
  padding: theme.spacing(1),
  paddingTop: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(2),
}));
