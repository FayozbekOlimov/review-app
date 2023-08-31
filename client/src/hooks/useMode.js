import { useMemo, useState } from "react";
import { createTheme } from "@mui/material";
import { themeSettings } from "../theme";

const useMode = () => {
  const [mode, setMode] = useState("light");

  const toggleColorMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return { theme, toggleColorMode };
};

export default useMode;
