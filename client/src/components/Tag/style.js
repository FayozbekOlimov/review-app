import { Chip, styled } from "@mui/material";

export const StyledChip = styled(Chip)(({ theme }) => ({
  fontWeight: 500,
  borderWidth: 2,
  color: theme.palette.success.main,
  borderColor: theme.palette.success.main,
  transition: "all 0.3s ease",
  cursor: "pointer",

  "&:hover": {
    letterSpacing: "2px",
  },
}));
