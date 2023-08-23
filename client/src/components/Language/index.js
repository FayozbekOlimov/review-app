import { useState } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";

const Language = () => {
  const [lang, setLang] = useState("en");

  const handleChange = (event) => {
    setLang(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <Select
        id="lang-select"
        value={lang}
        onChange={handleChange}
        size="small"
        sx={{
          width: 80,
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
        }}
      >
        <MenuItem value={"en"}>EN</MenuItem>
        <MenuItem value={"uz"}>UZ</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Language;
