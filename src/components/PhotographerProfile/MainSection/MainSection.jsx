import React from "react";
import BasicTabs from "../NavigationTabs/NavigationTabs";
import "./MainSection.css";
import { Box } from "@mui/material";

const MainSection = (id) => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <BasicTabs id={id} />
      </Box>
    </>
  );
};

export default MainSection;
