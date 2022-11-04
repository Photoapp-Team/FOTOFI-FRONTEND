import "./PackageCard.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import { useNavigate } from "react-router-dom";

export default function PackageCard({
  service,
  img,
  isLoaded,
  withFooter,
  minPrice,
  editMode,
  packageId,
  isOwner,
}) {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/package/${packageId}`);
  };

  return (
    <>
      <Card
        className="serviceCard"
        sx={{ maxWidth: 250, borderRadius: 2, minWidth: 202, margin: 2 }}
        elevation={4}
        onClick={isOwner ? "" : handleOnClick}
      >
        <CardActionArea sx={{ maxWidth: 300, padding: ".5rem" }}>
          {isLoaded ? (
            <CardMedia className="cardImg" component="img" height="140" image={img} alt={service} />
          ) : (
            <Skeleton variant="rectangular" height={140} align="center" />
          )}

          <CardContent sx={{ pb: 0 }}>
            {isLoaded ? (
              <Typography
                className="cardTitle"
                variant="h5"
                component="div"
                children={service}
                align="center"
                boxSizing="content-box"
              />
            ) : (
              <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
