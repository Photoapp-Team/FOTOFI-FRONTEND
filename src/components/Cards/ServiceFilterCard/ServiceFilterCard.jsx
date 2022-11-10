import "./ServiceFilterCard.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import ServiceCardFooter from "../ServiceCardFooter";
import { useUser } from "../../../contexts/UserContext";

export default function ServiceFilterCard({
  service,
  img,
  isLoaded,
  withFooter,
  minPrice,
  editMode,
}) {
  const [elevation, setElevation] = React.useState(0);
  const [selected, setSelected] = React.useState("serviceCard");
  const { setFilters } = useUser();
  const { filters } = useUser();
  const filtersInCard = filters;

  const handleOnClick = () => {
    if (filtersInCard.includes(service)) {
      setElevation(0);
      setSelected("serviceCard");
      const servicePosition = filtersInCard.indexOf(service);
      filtersInCard.splice(servicePosition, 1);
      setFilters([...filtersInCard]);
    } else {
      filtersInCard.push(service);
      setSelected("serviceCard-selected");
      setElevation(15);
      setFilters([...filtersInCard]);
    }
  };

  return (
    <>
      <Card
        className={selected}
        sx={{ maxWidth: 120, borderRadius: 2, minWidth: 90, margin: { xs: 0.5, md: 2 } }}
        elevation={elevation}
        onClick={handleOnClick}
      >
        <CardActionArea sx={{ maxWidth: 300, padding: ".5rem" }}>
          {isLoaded ? (
            <CardMedia
              className="card-service-filter-Img"
              component="img"
              image={img}
              alt={service}
              height="75"
              sx={{ display: { xs: "none", md: "flex" } }}
            />
          ) : (
            <Skeleton variant="rectangular" height={80} align="center" />
          )}

          <CardContent sx={{ p: { xs: 0, md: 0 }, pt: { xs: 0, md: 1 } }}>
            {isLoaded ? (
              <Typography
                className="cardTitle"
                variant="body2"
                component="div"
                children={service}
                align="center"
                boxSizing="content-box"
                padding=".25rem"
              />
            ) : (
              <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
            )}
          </CardContent>
        </CardActionArea>
        {withFooter ? (
          <ServiceCardFooter editMode={editMode} isLoaded={isLoaded} minPrice={minPrice} />
        ) : (
          <></>
        )}
      </Card>
    </>
  );
}
