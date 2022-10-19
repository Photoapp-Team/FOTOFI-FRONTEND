import "./ServiceCard.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

export default function ServiceCard({ service, img, isLoaded }) {
  return (
    <>
      <Card sx={{ maxWidth: 250, borderRadius: 2 }} elevation={4}>
        <CardActionArea sx={{ maxWidth: 300, padding: ".5rem" }}>
          {isLoaded ? (
            <CardMedia
              className="cardImg"
              component="img"
              height="140"
              image={img}
              alt={service}
            />
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
