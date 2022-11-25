import "./SessionCard.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import useFetchBasicUser from "../../../services/useFetchBasicUser";
import useFetchPackage from "../../../services/FetchServices/useFetchPackage";
import { dateFormater } from "../../../services/dateFormater";
import { statusFormater } from "../../../services/statusFormater";
import { Box } from "@mui/system";

export default function SessionCard({ data }) {
  const clientData = useFetchBasicUser(data.userId);
  //const supplyerData = useFetchBasicUser(data.photographerId);
  const packageData = useFetchPackage(data.package);

  let fecha = dateFormater(data.startDate);

  const sessionStatus = statusFormater(data.status);
  const lastStatus = sessionStatus.slice(-1);

  return (
    <>
      <Card
        className={`sessioncard-${lastStatus}`}
        sx={{ width: 220, borderRadius: 2, minWidth: 202, margin: 2, height: 300 }}
        elevation={4}
      >
        <CardActionArea sx={{ maxWidth: 300, padding: ".5rem" }} href={`/session/${data._id}`}>
          <Typography
            variant="subtitle"
            component="div"
            children={
              packageData?.data
                ? `Paquete de ${packageData.data.serviceCategory.toLowerCase()}`
                : "pendiente"
            }
            align="center"
            boxSizing="content-box"
            sx={{ p: 1, textAlign: "initial" }}
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
          />
          <Divider />
          <Typography
            variant="subtitle"
            component="div"
            children="Fecha solicitada:"
            align="left"
            boxSizing="content-box"
            sx={{ p: 0.75 }}
          />
          <Typography
            variant="subtitle"
            component="div"
            children={fecha}
            align="initial"
            boxSizing="content-box"
            sx={{ p: 0.75, fontWeight: 700 }}
          />
          <Divider />
          <Box sx={{ minHeight: "62px" }}>
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
              children={data?.location ? `${data.location.toUpperCase()}` : ""}
              align="initial"
              boxSizing="content-box"
              sx={{ p: 0.75, fontWeight: 700 }}
            />
          </Box>
          <Divider />

          <CardContent sx={{ pb: 0 }}>
            <Typography
              className="cardTitle"
              variant="h6"
              component="div"
              children={lastStatus}
              align="initial"
              boxSizing="content-box"
              sx={{ fontWeight: 700 }}
            />
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
