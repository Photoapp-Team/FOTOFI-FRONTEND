import "./ServiceCard.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard(service, img) {
  return (
    <Card sx={{ maxWidth: 250, borderRadius: 2 }} elevation={4}>
      <CardActionArea sx={{ maxWidth: 300, padding: ".5rem" }}>
        <CardMedia
          className="cardImg"
          component="img"
          height="140"
          image="https://i.insider.com/61a7a6e10ed48c0019e537e8?width=1000&format=jpeg&auto=webp" //image={img} Esta linea es para ya pasar la info
          alt="FOTO BODA" //alt={service} Esta linea es para ya pasar la info
        />
        <CardContent sx={{ pb: 0 }}>
          <Typography
            className="cardTitle"
            variant="h5"
            component="div"
            children="BODAS" //children={service} Esta linea es para ya pasar la info
            align="center"
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
