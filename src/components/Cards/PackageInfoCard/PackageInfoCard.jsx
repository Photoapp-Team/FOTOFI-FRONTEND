import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Button from "../../Button/Button";
import CardContent from "@mui/material/CardContent";
import { List, ListItemText, ListItem } from "@mui/material";
import Divider from "@mui/material/Divider";
import StarIcon from "@mui/icons-material/StarTwoTone";
import "./PackageInfoCard.css";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../contexts/UserContext";

export default function PackageInfoCard({
  minPrice,
  maxPrice,
  description,
  deliveryTime,
  minQuantityPrevPhotos,
  maxQuantityPrevPhotos,
  minQuantityFinalPhotos,
  maxQuantityFinalPhotos,
  isLoaded,
  serviceId,
  photographerId,
}) {
  const { isUserLoggedIn, setAutomaticRedirection } = useUser();
  const navigate = useNavigate();
  const handleOnClick = () => {
    if (isUserLoggedIn) {
      navigate(`/NewSession/${serviceId}?photographerId=${photographerId}`);
    } else {
      setAutomaticRedirection(
        `/NewSession/${serviceId}?photographerId=${photographerId}`
      );
      navigate(`/Login`);
    }
  };

  return (
    <>
      <Card alignItems="center" className="packageInfoCard">
        <CardHeader title="Paquetes" />
        <Divider></Divider>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            children={
              isLoaded ? (
                `MX$${minPrice} - MX$${maxPrice}`
              ) : (
                <Skeleton
                  variant="text"
                  width="60%"
                  sx={{ fontSize: ".9rem" }}
                />
              )
            }
          ></Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            children={
              isLoaded ? (
                description
              ) : (
                <Skeleton
                  variant="text"
                  width="60%"
                  sx={{ fontSize: ".9rem" }}
                />
              )
            }
          ></Typography>

          <List>
            <ListItem>
              <StarIcon />
              <ListItemText
                primary={
                  isLoaded ? (
                    `De ${minQuantityPrevPhotos} a ${maxQuantityPrevPhotos} fotos`
                  ) : (
                    <Skeleton
                      variant="text"
                      width="60%"
                      sx={{ fontSize: ".9rem" }}
                    />
                  )
                }
              />
            </ListItem>
            <ListItem>
              <StarIcon />
              <ListItemText
                primary={
                  isLoaded ? (
                    `Se entregan de ${minQuantityFinalPhotos} a ${maxQuantityFinalPhotos} fotos editadas en alta resolucion para que las imprimas.`
                  ) : (
                    <Skeleton
                      variant="text"
                      width="60%"
                      sx={{ fontSize: ".9rem" }}
                    />
                  )
                }
              />
            </ListItem>
            <ListItem>
              <StarIcon />
              <ListItemText
                primary={
                  isLoaded ? (
                    `Tiempo de entrega ${deliveryTime}`
                  ) : (
                    <Skeleton
                      variant="text"
                      width="60%"
                      sx={{ fontSize: ".9rem" }}
                    />
                  )
                }
              />
            </ListItem>
          </List>
        </CardContent>
        <Button
          name={"Agregar"}
          className={"schedule-button"}
          onClick={handleOnClick}
        />
      </Card>
    </>
  );
}
