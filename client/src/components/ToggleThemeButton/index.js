import { useContext } from "react";
import { useTheme, IconButton } from "@mui/material";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { Wrapper } from "./style";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ToggleThemeButton = () => {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ThemeContext);

  return (
    <Wrapper>
      <IconButton
        onClick={toggleColorMode}
        color="inherit"
        sx={{ borderRadius: 0.5 }}
      >
        {theme.palette.mode === "dark" ? (
          <Brightness4Icon sx={{ fontSize: "24px" }} />
        ) : (
          <Brightness7Icon sx={{ fontSize: "24px" }} />
        )}
      </IconButton>
    </Wrapper>
  );
};

export default ToggleThemeButton;
