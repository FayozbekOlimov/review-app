import {
  Button,
  Grid,
  IconButton,
  MenuItem,
  Typography,
  Menu,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavMenuBox } from "./style";
import { Link } from "react-router-dom";

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
  // const settings = ["Profile", "Logout"];
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <>
      <Grid container>
        <Grid item>
          <NavMenuBox forphone={"false"}>
            {pages.map(({ text, to }) => (
              <Button
                key={text}
                onClick={handleCloseNavMenu}
                sx={{ color: "white", display: "block" }}
                LinkComponent={Link}
                to={to}
              >
                {text}
              </Button>
            ))}
          </NavMenuBox>
        </Grid>
        <Grid item>
          <NavMenuBox forphone={"true"}>
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
          </NavMenuBox>
        </Grid>
      </Grid>
      {/* <Box sx={{ flexGrow: 0 }}>
        <Tooltip>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
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
      </Box> */}
    </>
  );
};

export default NavMenu;
