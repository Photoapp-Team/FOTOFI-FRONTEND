import { Box, Divider } from "@mui/material";
import React from "react";
import CustomBreadcrumbs from "../../Inputs/CustomBreadcrumbs";
import Avatar from "@mui/material/Avatar";
import { dateFormater } from "../../../services/dateFormater";
import "./SessionInfoCard.css";

const SessionInfoCard = ({ data, sessionUser, currentStatus }) => {
  if (data && sessionUser) {
    let fecha = dateFormater(data.startDate);
    return (
      <>
        <Box>
          <CustomBreadcrumbs sessionName={data.name} />
        </Box>
        <Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: 2 }}>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                width: "auto",
                maxHeight: 60,
                ml: 5,
                mt: 2,
              }}
            >
              <Avatar
                className="user-avatar"
                alt="USER PROFILE PIC"
                src={sessionUser.profilePic}
                sx={{ width: 70, height: 70, m: 2 }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                justifyContent: "flex-start",
                maxWidth: 320,
                fontSize: 24,
                fontWeight: 600,
              }}
              className="sessionInfoName"
            >
              <Box>Cliente:</Box>
              <Box>{sessionUser.name}</Box>
              <Box>{sessionUser.lastname}</Box>
            </Box>
          </Box>
          <Box sx={{ pl: "45px" }} className="sessionInfoDetail">
            <Box
              sx={{ mt: 1, ml: 14.5, fontSize: 18, fontWeight: 500 }}
              className="sessionInfoDetail"
            >
              <Box sx={{ fontWeight: 600, display: "inline" }}>Sesión:</Box> {data.name}
            </Box>
            <Box
              sx={{ mt: 1, ml: 14.5, fontSize: 18, fontWeight: 500 }}
              className="sessionInfoDetail"
            >
              <Box sx={{ fontWeight: 600, display: "inline" }}>Fecha:</Box> {fecha}
            </Box>
            <Box
              sx={{ mt: 1, ml: 14.5, fontSize: 18, fontWeight: 500 }}
              className="sessionInfoDetail"
            >
              <Box sx={{ fontWeight: 600, display: "inline" }}>Lugar:</Box>{" "}
              {`${data.location.toUpperCase()}`}
            </Box>
            <Box
              sx={{ mt: 1, ml: 14.5, mb: 3, fontSize: 18, fontWeight: 500 }}
              className="sessionInfoDetail"
            >
              <Box sx={{ fontWeight: 600, display: "inline" }}>Status:</Box> {currentStatus}
            </Box>
          </Box>
        </Box>
        <Divider variant="middle" />
      </>
    );
  }
};

export default SessionInfoCard;
