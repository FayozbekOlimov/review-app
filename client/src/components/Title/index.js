import { styled, Typography } from "@mui/material";

const StyledTitle = styled(Typography)(({ theme }) => ({
  position: "relative",
  paddingLeft: theme.spacing(2),
  textTransform: "capitalize",
  fontSize: `${theme.typography["h1"]}px`,
  lineHeight: 1.5,
  margin: "8px 0",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: theme.spacing(1),
    borderRadius: theme.spacing(1),
    background: theme.palette.warning.main,
  },
}));

const Title = (props) => {
  return <StyledTitle {...props} />;
};

export default Title;
