import { useState } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";
import { StyledSelect } from "./style";

const Language = () => {
  const [lang, setLang] = useState("en");

  const handleChange = (event) => {
    setLang(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <StyledSelect value={lang} onChange={handleChange} size="small">
        <MenuItem value={"en"}>EN</MenuItem>
        <MenuItem value={"uz"}>UZ</MenuItem>
      </StyledSelect>
    </FormControl>
  );
};

export default Language;
