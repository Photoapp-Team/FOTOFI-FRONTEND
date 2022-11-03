import "./ServiceCard.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import ServiceCardFooter from "../ServiceCardFooter";
import { useUser } from "../../../contexts/UserContext";

export default function ServiceCard({ service, img, isLoaded, withFooter, minPrice, editMode }) {
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
        sx={{ maxWidth: 120, borderRadius: 2, minWidth: 90, margin: 2 }}
        elevation={elevation}
        onClick={handleOnClick}
      >
        <CardActionArea sx={{ maxWidth: 300, padding: ".5rem" }}>
          {isLoaded ? (
            <CardMedia className="cardImg" component="img" height="75" image={img} alt={service} />
          ) : (
            <Skeleton variant="rectangular" height={80} align="center" />
          )}

          <CardContent sx={{ p: 0, pt: 1 }}>
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
