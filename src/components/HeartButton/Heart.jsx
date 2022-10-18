import React from "react"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from "@mui/material";
import "../HeartButton/Heart.css"
import { ThemeProvider } from "@emotion/react";
import theme from "../../styles/IconButtonsStyles";


const Heart = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        className="HeartButton"
        variant="contained"
        color="primary"
        startIcon={<FavoriteIcon fontSize="small" color="secondary" />}
      ></Button>
    </ThemeProvider>
  );
};

export default Heart