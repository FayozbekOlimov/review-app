import {
  IconButton,
  MenuItem,
  Typography,
  Menu,
  Box,
  Tooltip,
  Avatar,
  Button,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavMenu = () => {
  const pages = [
    {
      text: "Login",
      to: "/login",
    },
    {
      text: "Sign up",
      to: "/signup",
    },
  ];
  const settings = ["Profile", "Logout"];
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { user } = useSelector((state) => state.login);

  console.log(user);

  return (
    <>
      <Box display={{ xs: "none", md: "flex" }}>
        {user?.message ? (
          <>
            <Tooltip>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="John Doe"
                  src="/static/images/avatar/2.jpg"
                  sx={{ bgcolor: "secondary.main" }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: 6 }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          pages.map(({ text, to }) => (
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
          <>
            <Tooltip>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="John Doe"
                  src="/static/images/avatar/2.jpg"
                  sx={{ bgcolor: "secondary.main" }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: 6 }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </>
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
              {pages.map(({ text, to }) => (
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
