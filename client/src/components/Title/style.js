import { styled, Typography } from "@mui/material";

export const StyledTitle = styled(Typography)(({ theme }) => ({
  position: "relative",
  paddingLeft: theme.spacing(2),
  textTransform: "capitalize",
  lineHeight: 1.5,
  margin: "4px 0",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: theme.spacing(0.8),
    borderRadius: theme.spacing(0.4),
    background: theme.palette.warning.main,
  },
}));
