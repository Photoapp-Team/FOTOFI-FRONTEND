import React from "react"
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Button } from "@mui/material";


const BellButton = () =>{
    return (
        <Button className="bellButton" 
          
          variant="contained"
          color="primary"
          startIcon={<NotificationsIcon fontSize="small"/>}
          >
        </Button>
    )
}

export default BellButton