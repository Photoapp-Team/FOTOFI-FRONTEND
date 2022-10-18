import React from "react"
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Button } from "@mui/material";
// import { buttonSize } from "../../styles/buttonSize"; //testing styled mui

import { ThemeProvider } from "@emotion/react";
import theme from "../../styles/IconButtonsStyles";

const BellButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        
        className="bellButton"
        size="small"
        variant="contained"
        startIcon={<NotificationsIcon fontSize="small" color="secondary" />}
      ></Button>
    </ThemeProvider>
  );
};

export default BellButton