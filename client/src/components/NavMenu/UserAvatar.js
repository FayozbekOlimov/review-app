import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const UserAvatar = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
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
        <MenuItem onClick={handleCloseUserMenu} component={Link} to="/profile">
          <Typography>Profile</Typography>
        </MenuItem>
        <MenuItem onClick={handleCloseUserMenu} component={Link} to="/logout">
          <Typography>Logout</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserAvatar;
