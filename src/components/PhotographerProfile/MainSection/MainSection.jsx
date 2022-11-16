import React from "react";
import BasicTabs from "../NavigationTabs/NavigationTabs";
import "./MainSection.css";
import { Box } from "@mui/material";

const MainSection = ({ id, role, userData }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
        className="profile-main-box"
      >
        <BasicTabs id={id} role={role} userData={userData} />
      </Box>
    </>
  );
};

export default MainSection;
