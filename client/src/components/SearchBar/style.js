import { Box, InputBase, styled } from "@mui/material";

export const Search = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
  border: "1px solid",
  display: "flex",
}));

export const SearchIconWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderLeft: "1px solid",
  cursor: "pointer",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1.5, 1, 1.5),
    width: "100%",
  },
}));
