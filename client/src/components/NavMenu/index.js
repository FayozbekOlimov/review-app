import {
  IconButton,
  MenuItem,
  Typography,
  Menu,
  Box,
  Button,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UserAvatar from "./UserAvatar";

const NavMenu = () => {
  const links = [
    {
      text: "Login",
      to: "/login",
    },
    {
      text: "Sign up",
      to: "/signup",
    },
  ];
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const { user } = useSelector((state) => state.login);

  return (
    <>
      <Box display={{ xs: "none", md: "flex" }}>
        {user?.message ? (
          <UserAvatar />
        ) : (
          links.map(({ text, to }) => (
            <Button
              key={text}
              onClick={handleCloseNavMenu}
              sx={{ color: "white", display: "block" }}
              LinkComponent={Link}
              to={to}
            >
              {text}
            </Button>
          ))
        )}
      </Box>
      <Box display={{ xs: "flex", md: "none" }} gap={1}>
        {user?.message ? (
          <UserAvatar />
        ) : (
          <>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ p: 1.2 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {links.map(({ text, to }) => (
                <MenuItem key={text} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    component={Link}
                    to={to}
                    sx={{ color: "text.primary", textDecoration: "none" }}
                  >
                    {text}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </>
        )}
      </Box>
    </>
  );
};

export default NavMenu;
