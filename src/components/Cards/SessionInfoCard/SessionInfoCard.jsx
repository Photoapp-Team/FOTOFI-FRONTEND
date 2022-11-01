import { Box, Divider, Grow } from "@mui/material";
import React from "react";
import CustomBreadcrumbs from "../../Inputs/CustomBreadcrumbs";
import ProfilePhoto from "../../PhotographerProfile/ProfilePhoto";

const SessionInfoCard = ({ data, sessionUser, currentStatus }) => {
  console.log({ data }, { sessionUser }, { currentStatus });
  if (data && sessionUser) {
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
              <ProfilePhoto
                photoclass={"sessionUserProfilepic"}
                profilePic={sessionUser.profilePic}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                justifyContent: "flex-start",
                width: 200,
                fontSize: 24,
                fontWeight: 600,
              }}
            >
              <Box>{sessionUser.name}</Box>
              <Box>{sessionUser.lastname}</Box>
            </Box>
          </Box>
          <Box sx={{ mt: 1, ml: 14.5, fontSize: 18, fontWeight: 500 }}>
            <Box sx={{ fontWeight: 600, display: "inline" }}>Sesión:</Box> {data.name}
          </Box>
          <Box sx={{ mt: 1, ml: 14.5, fontSize: 18, fontWeight: 500 }}>
            <Box sx={{ fontWeight: 600, display: "inline" }}>Lugar:</Box> {data.location}
          </Box>
          <Box sx={{ mt: 1, ml: 14.5, mb: 3, fontSize: 18, fontWeight: 500 }}>
            <Box sx={{ fontWeight: 600, display: "inline" }}>Status:</Box> {currentStatus}
          </Box>
        </Box>
        <Divider variant="middle" />
      </>
    );
  }
};

export default SessionInfoCard;
