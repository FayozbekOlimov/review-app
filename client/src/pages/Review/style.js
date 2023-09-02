import { Box, Paper, styled } from "@mui/material";
import shadows from "@mui/material/styles/shadows";

export const MainReviewContent = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2),
  paddingTop: 0,

  [theme.breakpoints.down("md")]: {
    padding: 0,
  },
}));

export const OverallRatingBox = styled(Paper)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
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

  [theme.breakpoints.down("md")]: {
    flex: "0 0 100%",
    position: "static",
    height: "auto",

    "& img": {
      width: "80%",
    },
  },
}));

export const LineOuter = styled(Box)(({ theme }) => ({
  width: "calc(100% - 140px)",
  height: "8px",
  backgroundColor: "#ccc",
  borderRadius: "4px",
  position: "relative",
  overflow: "hidden",
  display: "none",

  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));

export const LineInner = styled(Box)(({ theme }) => ({
  height: "100%",
  backgroundColor: theme.palette.info.main,
  borderRadius: "inherit",
}));

export const RatingBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  justifyContent: "space-between",
  width: "140px",
  marginLeft: "auto",
}));

export const Span = styled("span")({
  fontSize: "24px",
  fontFamily: "fantasy",
  fontWeight: 500,
  color: "blueviolet",
});

export const Image = styled("img")({
  boxShadow: shadows[6],
  borderRadius: "8px",
  width: "100%",
  height: "auto",
});

export const ReviewDetails = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  flexWrap: "wrap",
  columnGap: theme.spacing(2),
  rowGap: theme.spacing(1),
  alignItems: "center",
}));
