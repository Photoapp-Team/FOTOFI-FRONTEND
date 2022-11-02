import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../contexts/UserContext";
import "./ProfileMenu.css";

function ProfileMenu({ data }) {
  console.log("DATA:", data);
  const navigate = useNavigate();
  const { logout, userId } = useUser();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 1, display: "flex" }}>
          <Avatar alt="USER PROFILE PIC" src={data.profilePic} />
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
        <MenuItem
          key="profile-button"
          onClick={() => {
            handleCloseUserMenu();
            navigate(`/profile/${userId}`);
          }}
        >
          <Typography textAlign="center">My Profile</Typography>
        </MenuItem>
        <MenuItem
          key="logout-button"
          onClick={() => {
            logout();
            handleCloseUserMenu();
            navigate("/");
          }}
        >
          <Typography textAlign="center">Log out</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}
export default ProfileMenu;
