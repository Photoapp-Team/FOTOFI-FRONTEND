import { Box } from "@mui/material";
import React from "react";
import "./ProfilePhoto.css";

const ProfilePhoto = ({ profilePic, photoclass }) => {
  return (
    <Box className={photoclass}>
      <img src={profilePic} />
    </Box>
  );
};

export default ProfilePhoto;
