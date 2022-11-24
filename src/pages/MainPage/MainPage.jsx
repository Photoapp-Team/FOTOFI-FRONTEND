import "./MainPage.css";
import React from "react";
import ServiceFilter from "../../components/ServiceFilter";
import { Typography } from "@mui/material";
import PhotographersContainer from "../../components/Containers/PhotographersContainer";
import Grid from "@mui/material/Grid";
import { useUser } from "../../contexts/UserContext";
import { useEffect } from "react";

const MainPage = () => {
  const { setSearchWord } = useUser();

  useEffect(() => {
    return () => {
      setSearchWord("");
    };
  }, []);

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
          children="Fotógrafos disponibles"
          align="center"
          boxSizing="content-box"
        />
        <PhotographersContainer></PhotographersContainer>
      </Grid>
    </Grid>
  );
};

export default MainPage;
