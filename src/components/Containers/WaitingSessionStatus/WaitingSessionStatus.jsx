import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Photographer from "../../../assets/images/photography (1).jpg";
import User from "../../../assets/images/usercomputer.jpg";
import { useNavigate } from "react-router-dom";

const WaitingSessionStatus = ({ user }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/MainPage");
  };

  if (user !== "usuario") {
    return (
      <Card sx={{ maxWidth: 420, mx: "auto", my: 20 }}>
        <CardMedia component="img" alt="camera" height="140" image={Photographer} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Ya casi...
          </Typography>
          <Typography variant="body2" color="text.secondary">
            El fotógrafo está trabajando en tus fotos, por favor espera a que termine. Muy pronto
            podrás seguir el flujo de la sesión.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              onClick();
            }}
          >
            Ir a Inicio
          </Button>
        </CardActions>
      </Card>
    );
  } else {
    return (
      <Card sx={{ maxWidth: 420, mx: "auto", my: 20 }}>
        <CardMedia component="img" alt="camera" height="140" image={User} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Ya casi...
          </Typography>
          <Typography variant="body2" color="text.secondary">
            El usuario está revisando tus fotos, por favor espera a que termine. Muy pronto podrás
            seguir el flujo de la sesión.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              onClick();
            }}
          >
            Ir a Inicio
          </Button>
        </CardActions>
      </Card>
    );
  }
};

export default WaitingSessionStatus;
