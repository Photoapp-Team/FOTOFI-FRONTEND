import "./SessionCard.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import { List, ListItemText, ListItem } from "@mui/material";
import Divider from "@mui/material/Divider";

import useFetchBasicUser from "../../../services/useFetchBasicUser";
import useFetchPackage from "../../../services/useFetchPackage";
import { dateFormater } from "../../../services/dateFormater";
import { statusFormater } from "../../../services/statusFormater";

export default function SessionCard({ data }) {
  const clientData = useFetchBasicUser(data.userId);
  const supplyerData = useFetchBasicUser(data.photographerId);
  const packageData = useFetchPackage(data.package);

  let fecha = dateFormater(data.startDate);

  const sessionStatus = statusFormater(data.status);
  const lastStatus = sessionStatus.slice(-1);

  return (
    <>
      <Card
        className={`sessioncard-${lastStatus}`}
        sx={{ maxWidth: 450, borderRadius: 2, minWidth: 202, margin: 2 }}
        elevation={4}
      >
        <Typography
          variant="subtitle"
          component="div"
          children={
            packageData?.data
              ? `Servicio de fotografía ${packageData.data.serviceCategory}`
              : "pendiente"
          }
          align="center"
          boxSizing="content-box"
          sx={{ p: 1 }}
        />
        <Divider />
        <Typography
          variant="subtitle"
          component="div"
          children={`Para:`}
          align="left"
          boxSizing="content-box"
          sx={{ p: 0.75 }}
        />
        <CardHeader
          className="cardHeader"
          sx={{ p: 0.75 }}
          avatar={<Avatar alt={`Sesion: ${data.username}`} src={clientData.data?.profilePic} />}
          title={clientData.data?.username}
          subheader={clientData.data?.location.city}
        />
        <Divider />
        <Typography
          variant="subtitle"
          component="div"
          children="Fecha programada:"
          align="left"
          boxSizing="content-box"
          sx={{ p: 0.75 }}
        />
        <Typography
          variant="subtitle"
          component="div"
          children={fecha}
          align="center"
          boxSizing="content-box"
          sx={{ p: 0.75 }}
        />
        <Divider />

        <Typography
          variant="subtitle"
          component="div"
          children="Ubicacion:"
          align="left"
          boxSizing="content-box"
          sx={{ p: 0.75 }}
        />
        <Typography
          variant="subtitle"
          component="div"
          children={data.location}
          align="center"
          boxSizing="content-box"
          sx={{ p: 0.75 }}
        />
        <Divider />
        <CardActionArea sx={{ maxWidth: 300, padding: ".5rem" }}>
          <CardContent sx={{ pb: 0 }}>
            <Typography
              className="cardTitle"
              variant="h5"
              component="div"
              children={lastStatus}
              align="center"
              boxSizing="content-box"
            />
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
