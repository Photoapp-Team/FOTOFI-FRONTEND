import "./MainPage.css";
import React from "react";
import ServiceFilter from "../../components/ServiceFilter";
import { Typography } from "@mui/material";
import PhotographersContainer from "../../components/Containers/PhotographersContainer";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const MainPage = () => {
  return (
    <Container className="main-page-container" sx={{ p: 4 }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item sm={12} className="filter-container">
          <Typography
            sx={{ px: 4, pt: 2 }}
            variant="h6"
            component="div"
            children="Filtro de servicio"
            align="left"
            boxSizing="content-box"
          />
          <ServiceFilter></ServiceFilter>
        </Grid>
        <Grid item sm={12}>
          <Typography
            sx={{ px: 4, pt: 2 }}
            className="filterTitle"
            variant="h6"
            component="div"
            children="Fotografos disponibles"
            align="left"
            boxSizing="content-box"
          />
          <PhotographersContainer></PhotographersContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainPage;
