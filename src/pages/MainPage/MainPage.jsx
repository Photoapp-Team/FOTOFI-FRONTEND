import "./MainPage.css";
import React from "react";
import ServiceFilter from "../../components/ServiceFilter";
import { Typography } from "@mui/material";
import PhotographersContainer from "../../components/Containers/PhotographersContainer";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const MainPage = () => {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item sm={12} className="filter-container">
        <Typography
          sx={{ px: 4, pt: 2 }}
          variant="h5"
          component="div"
          children="Filtro de servicio"
          align="center"
          boxSizing="content-box"
        />
        <ServiceFilter></ServiceFilter>
      </Grid>
      <Grid item sm={12}>
        <Typography
          sx={{ px: 4, pt: 2 }}
          className="filterTitle"
          variant="h4"
          component="div"
          children="Fotografos disponibles"
          align="center"
          boxSizing="content-box"
        />
        <PhotographersContainer></PhotographersContainer>
      </Grid>
    </Grid>
  );
};

export default MainPage;
