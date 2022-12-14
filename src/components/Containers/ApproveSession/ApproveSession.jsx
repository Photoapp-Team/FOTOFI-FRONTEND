import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Divider } from "@mui/material";
import CameraPic from "../../../assets/backgroundImages/pexels-alexey-demidov-10137512.jpg";
import { dateFormater } from "../../../services/dateFormater";
import { Box } from "@mui/system";
import { updateSession } from "../../../services/updateSession";
import "./ApproveSession.css";

const ApproveSession = ({ data, sessionId, setStatusWorkspace, next }) => {
  const onSubmit = async (value) => {
    if (value === "confirm") {
      const newValue = {
        status: {
          approved: Date.now(),
        },
      };
      const updatedSession = await updateSession(sessionId, newValue);
      setStatusWorkspace(updatedSession);
    } else if (value === "reject") {
      const newValue = {
        status: {
          cancelled: Date.now(),
        },
      };
      const updatedSession = await updateSession(sessionId, newValue);
      next();
      setStatusWorkspace(updatedSession);
    }
  };

  let fecha = dateFormater(data.startDate);
  return (
    <Box sx={{ height: "calc(100%-199px" }}>
      {" "}
      <Card sx={{ maxWidth: 695, height: "auto", mx: "auto", my: "5%", borderRadius: "5px" }}>
        <CardMedia component="img" height="190" image={CameraPic} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" textAlign={"center"}>
            Nueva Sesión Agendada
          </Typography>
          <Divider variant="middle" />
          <Typography color="text.primary" align="justify" sx={{ fontWeight: "500" }}>
            <Box textAlign={"center"}>Por favor confirma si los datos son correctos</Box>
            <br />
            <Box component={"span"} sx={{ fontWeight: "bold" }}>
              Nombre:{" "}
            </Box>
            {data.name}
            <br />
            <Box component={"span"} sx={{ fontWeight: "bold" }}>
              Lugar:{" "}
            </Box>
            {data.location}
            <br />
            <Box component={"span"} sx={{ fontWeight: "bold" }}>
              Fecha:{" "}
            </Box>
            {fecha}
            <br />
            <Box component={"span"} sx={{ fontWeight: "bold" }}>
              Precio:{" "}
            </Box>
            ${data.price}
            <br />
            <Box component={"span"} sx={{ fontWeight: "bold" }}>
              Fotos a tomar:{" "}
            </Box>
            {data.quantityPrevPhotos}
            <br />
            <Box component={"span"} sx={{ fontWeight: "bold" }}>
              Fotos entregables:{" "}
            </Box>
            {data.quantityFinalPhotos}
            <br />
            <Box component={"span"} sx={{ fontWeight: "bold" }}>
              Tiempo de entrega:{" "}
            </Box>
            {data.deliveryTime}
          </Typography>
        </CardContent>
        <CardActions>
          <Box sx={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
            <Button
              size="small"
              type="submit"
              name="Confirmar"
              value="confirm"
              variant="secondary"
              children="Confirmar"
              className="approve-session-button"
              onClick={() => onSubmit("confirm")}
            />
            <Button
              size="small"
              type="submit"
              name="Cancelar"
              value="confirm"
              variant="reject"
              children="Cancelar"
              className="reject-session-button"
              onClick={() => onSubmit("reject")}
            />
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ApproveSession;
