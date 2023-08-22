import { createContext } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import useMode from "../hooks/useMode";

const ThemeContext = createContext({});

const ThemeContextProvider = ({ children }) => {
  const { theme, toggleColorMode } = useMode();

  return (
    <ThemeContext.Provider value={{ toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
