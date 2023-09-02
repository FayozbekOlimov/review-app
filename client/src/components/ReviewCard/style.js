import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import shadows from "@mui/material/styles/shadows";

export const ReviewText = styled(Typography)(({ theme }) => ({
  width: "100%",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
  color: theme.palette.text.secondary,
}));

export const CardWrapper = styled(Card)({
  boxShadow: shadows[4],
  borderRadius: "8px",
});

export const CardContentBox = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(1.5),
  "&:last-child": { paddingBottom: theme.spacing(1.5) },
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.5),
}));

export const CardContentDetails = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const CardImage = styled(CardMedia)({
  height: "350px",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

export const CardImageBox = styled(Box)({
  overflow: "hidden",
  position: "relative",
  borderRadius: "0 0 8px 8px",
  cursor: "pointer",
});

export const CardActionArea = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  right: theme.spacing(1),
  display: "flex",
  gap: theme.spacing(1),
  zIndex: 99,
}));

export const ActionWrapper = styled(Paper)(({ theme }) => ({
  borderRadius: "50%",
  backgroundColor: "white",
  width: "43.2px",
  height: "43.2px",
  border: `2px solid ${theme.palette.error.main}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const ReviewGrade = styled(ActionWrapper)({
  fontWeight: 500,
  userSelect: "none",
  backgroundColor: orange["900"],
  color: "white",
  border: "none",
});
