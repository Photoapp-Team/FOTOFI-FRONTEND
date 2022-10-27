import { Box } from "@mui/material";
import React from "react";
import BasicTabs from "../NavigationTabs/NavigationTabs";

const MainSection = (id) => {
  console.log("id", id);
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <BasicTabs id={id} />
      </Box>
    </>
  );
};

export default MainSection;
