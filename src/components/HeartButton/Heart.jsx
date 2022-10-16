import React from "react"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from "@mui/material";
import "../HeartButton/Heart.css"

const Heart = () =>{
    return (
        <Button className="HeartButton" 
          
          variant="contained"
          color="primary"
          startIcon={<FavoriteIcon fontSize="small"/>}
          >
        </Button>
    )
}

export default Heart