import * as React from "react";
import Box from "@mui/material/Box";
import "./FooterLayout.css";
import { Typography } from '@mui/material';
import Facebook from "../../images/facebook.png";
import Instagram from "../../images/instagramlogo.png";

function FooterLayout () {
  return (
    <div className= "footer-layout">
      <Box className="footerContainer"  position="static" sx={{display: "flex", flexDirection:"column", backgroundColor: '#f1f1f1', p: 3,}}>
        <Box sx={{gap:2, display: "flex"}} >
          <a href="/">
            <img src={Facebook} className="facebook" />
          </a>
          <a href="/">
            <img src={Instagram} className="instagram" />
          </a>
        </Box>
        <Box>
          <Typography align="center" variant="body1" sx={{ marginBottom: '1rem', lineHeight: "2rem" }}>
            <Box component="span" sx={{fontWeight: "bold" }}>
              FOTOFI 
            </Box>
            <span title="copyright">  copyright © </span> 2022. 
          </Typography>
          <Typography align="center" variant="body1" sx={{ marginBottom: '1rem' }}>
            Plataforma orientada a facilitar el contacto y contratación de servicios profesionales del área audiovisual.
            <br />
            Nuestra misión es enlazar a fotografos con usuarios y hacer su experiencia más fácil y dinámica. 
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default FooterLayout;