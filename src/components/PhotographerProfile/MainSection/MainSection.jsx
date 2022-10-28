import React from "react";
import BasicTabs from "../NavigationTabs/NavigationTabs";
import "./MainSection.css";
import { Box } from "@mui/material";

const MainSection = (id) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
          },
        }}
        className="profile-main-box"
      >
        <BasicTabs id={id} />
      </Box>
    </>
  );
};

export default MainSection;
