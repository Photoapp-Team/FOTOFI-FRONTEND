import { Box } from "@mui/material";
import React from "react";
import BrokenCamera from "../../assets/images/dedznikon.jpg";

const ErrorPage = () => {
  return (
    <Box sx={{ width: "80%", height: "auto" }}>
      <Box sx={{ width: "60%", m: "auto", objectFit: "contain" }}>
        <img src={BrokenCamera} alt="Broken camera" />
      </Box>
    </Box>
  );
};

export default ErrorPage;
