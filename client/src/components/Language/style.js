import { Select, styled } from "@mui/material";

export const StyledSelect = styled(Select)({
  width: "80px",
  color: "white",
  "& fieldset": {
    border: "1px solid white",
  },

  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#fff",
    borderWidth: "1px",
  },

  "& .MuiSvgIcon-root": {
    color: "white",
  },
});
