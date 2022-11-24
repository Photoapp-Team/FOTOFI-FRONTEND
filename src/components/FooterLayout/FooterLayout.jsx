import * as React from "react";
import Box from "@mui/material/Box";
import "./FooterLayout.css";
import { Typography } from '@mui/material';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function FooterLayout() {
  return (
    <>
      <Box className="footerContainer"  position="static" sx={{display: "flex", flexDirection:"column", backgroundColor: '#f1f1f1', p: 3,}}>
        <Box sx={{gap:2, display: "flex"}}> 
          <FacebookIcon sx={{ fontSize: 30 }} />
          <InstagramIcon sx={{ fontSize: 30 }} />
        </Box>
        <Box>
          <Typography
            align="center"
            variant="body1"
            sx={{ marginBottom: "1rem", lineHeight: "2rem" }}
          >
            <Box component="span" sx={{ fontWeight: "bold" }}>
              FOTOFI
            </Box>
            <span title="copyright"> copyright © </span> 2022.
          </Typography>
          <Typography align="center" variant="body1" sx={{ marginBottom: "1rem" }}>
            Plataforma orientada a facilitar el contacto y contratación de servicios profesionales
            del área audiovisual.
            <br />
            Nuestra misión es enlazar a fotógrafos con usuarios y hacer su experiencia más fácil y
            dinámica.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default FooterLayout;
