import { useContext } from "react";
import { styled, useTheme, Box, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { ThemeContext } from "../../context/ThemeContextProvider";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: theme.spacing(0.5),
  border: "1px solid white",
}));

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
          <Brightness7 sx={{ fontSize: "24px" }} />
        ) : (
          <Brightness4 sx={{ fontSize: "24px" }} />
        )}
      </IconButton>
    </Wrapper>
  );
};

export default ToggleThemeButton;
