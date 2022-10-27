import "./SessionCard.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import { List, ListItemText, ListItem } from "@mui/material";
import Divider from "@mui/material/Divider";
import useFetchUser from "../../../services/useFetchUser";

export default function SessionCard({ data }) {
  const lastStatus = Object.keys(data.status).length - 2;
  const status = Object.keys(data.status)[lastStatus];
  return (
    <>
      <Card
        className="sessionCard"
        sx={{ maxWidth: 450, borderRadius: 2, minWidth: 202, margin: 2 }}
        elevation={4}
      >
        <Typography
          variant="subtitle"
          component="div"
          children={`Sesion Para:`}
          align="left"
          boxSizing="content-box"
          sx={{ p: 0.75 }}
        />
        <CardHeader
          className="cardHeader"
          sx={{ p: 0.75 }}
          avatar={<Avatar alt={`Sesion: ${data._id}`} src={"userData.profilePic"} />}
          title={`Sesion: ${data._id}`}
          subheader={"location"}
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
          children={data.startDate}
          align="left"
          boxSizing="content-box"
          sx={{ p: 0.75 }}
        />
        <Divider />
        <CardActionArea sx={{ maxWidth: 300, padding: ".5rem" }}>
          <Typography
            variant="body"
            component="div"
            children={`Estatus:${status}`}
            align="center"
            boxSizing="content-box"
          />

          <CardContent sx={{ pb: 0 }}>
            <List>
              <ListItem>
                <ListItemText primary={`para usuario ${data.userId[0]}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Del fotografo ${data.photographerId[0]}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Texto`} />
              </ListItem>
            </List>
            <Typography
              className="cardTitle"
              variant="h5"
              component="div"
              children={`Estatus:${status}`}
              align="center"
              boxSizing="content-box"
            />
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
