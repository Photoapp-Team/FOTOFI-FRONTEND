import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import CardContent from "@mui/material/CardContent";
import { List, ListItemText, ListItem, Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import StarIcon from "@mui/icons-material/StarTwoTone";
import "./PackageInfoCard.css";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../contexts/UserContext";

export default function PackageInfoCard({ data, isLoaded }) {
  const {
    minPrice,
    maxPrice,
    description,
    deliveryTime,
    minQuantityPrevPhotos,
    maxQuantityPrevPhotos,
    minQuantityFinalPhotos,
    maxQuantityFinalPhotos,
    _id,
    photographerId,
    serviceCategory,
  } = data;

  const { isUserLoggedIn, setAutomaticRedirection } = useUser();
  const navigate = useNavigate();
  const handleOnClick = () => {
    let token = localStorage.getItem("token");

    if (token) {
      navigate(`/NewSession/${_id}?photographerId=${photographerId}`);
    } else {
      setAutomaticRedirection(`/NewSession/${_id}?photographerId=${photographerId}`);
      navigate(`/Login`);
    }
  };

  return (
    <>
      <Card alignItems="center" className="packageInfoCard">
        <CardHeader title={`Paquete ${serviceCategory}`} />
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
                <Skeleton variant="text" width="60%" sx={{ fontSize: ".9rem" }} />
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
                <Skeleton variant="text" width="60%" sx={{ fontSize: ".9rem" }} />
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
                    <Skeleton variant="text" width="60%" sx={{ fontSize: ".9rem" }} />
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
                    <Skeleton variant="text" width="60%" sx={{ fontSize: ".9rem" }} />
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
                    <Skeleton variant="text" width="60%" sx={{ fontSize: ".9rem" }} />
                  )
                }
              />
            </ListItem>
          </List>
        </CardContent>
        <Button
          name="Agregar"
          children="Contratar"
          variant="secondary"
          onClick={handleOnClick}
          className="schedule-button"
          sx={{ mb: "1rem", width: "272px", mx: "auto" }}
        />
      </Card>
    </>
  );
}
