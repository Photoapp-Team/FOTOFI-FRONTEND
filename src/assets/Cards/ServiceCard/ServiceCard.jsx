import "./ServiceCard.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          className="cardImg"
          component="img"
          height="140"
          image="https://i.insider.com/61a7a6e10ed48c0019e537e8?width=1000&format=jpeg&auto=webp"
          alt="green iguana"
        />
        <CardContent>
          <Typography
            className="cardTitle"
            variant="h5"
            component="div"
            children="BODAS"
            align="center"
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
