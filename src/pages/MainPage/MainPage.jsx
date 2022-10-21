import "./MainPage.css";
import ServiceFilter from "../../components/ServiceFilter";
import { Typography } from "@mui/material";
import PhotographersDisplay from "../../components/PhotographersDisplay";

const MainPage = () => {
  return (
    <div className="mainPage">
      <div className="filterContainer">
        <Typography
          sx={{ px: 4, pt: 2 }}
          className="filterTitle"
          variant="h6"
          component="div"
          children="Filtro de servicio"
          align="left"
          boxSizing="content-box"
        />
        <ServiceFilter></ServiceFilter>
      </div>
      <div>
        <Typography
          sx={{ px: 4, pt: 2 }}
          className="filterTitle"
          variant="h6"
          component="div"
          children="Fotografos disponibles"
          align="left"
          boxSizing="content-box"
        />
        <PhotographersDisplay></PhotographersDisplay>
      </div>
    </div>
  );
};

export default MainPage;
