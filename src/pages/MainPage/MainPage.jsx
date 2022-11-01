import "./MainPage.css";
import ServiceFilter from "../../components/ServiceFilter";
import { Typography } from "@mui/material";
import PhotographersContainer from "../../components/Containers/PhotographersContainer";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import useFetchPhotographers from "../../services/FetchServices/useFetchPhotographers";

const MainPage = () => {
  const fetchPhotographers = useFetchPhotographers();
  const photographersData = fetchPhotographers.data;

  return (
    <Container className="mainContainer" maxWidth="xl" sx={{ p: 4 }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Typography
            sx={{ px: 4, pt: 2 }}
            className="filterTitle"
            variant="h6"
            component="div"
            children="Filtro de servicio"
            align="left"
            boxSizing="content-box"
          />
          <ServiceFilter setFilters={fetchPhotographers.setFilters}></ServiceFilter>
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{ px: 4, pt: 2 }}
            className="filterTitle"
            variant="h6"
            component="div"
            children="Fotografos disponibles"
            align="left"
            boxSizing="content-box"
          />
          <PhotographersContainer photographersData={photographersData}></PhotographersContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainPage;
