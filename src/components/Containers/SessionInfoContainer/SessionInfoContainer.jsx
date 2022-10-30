import { Box, Divider, Grow } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import useFetchUniqueSession from "../../../services/useFetchUniqueSession";
import useFetchUser from "../../../services/useFetchUser";
import CustomBreadcrumbs from "../../Inputs/CustomBreadcrumbs";
import ProfilePhoto from "../../PhotographerProfile/ProfilePhoto";

const SessionInfoContainer = () => {
  const params = useParams();
  const { id } = params;
  const { REACT_APP_API_ENDPOINT } = process.env;
  const url = `${REACT_APP_API_ENDPOINT}/sessions/session/${id}`;
  const { data, sessionUser } = useFetchUniqueSession(url);
  if (data) console.log(data, sessionUser);
  if (sessionUser && data) {
    return (
      <>
        <Box>
          <CustomBreadcrumbs sessionName={data.name} />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            width: "auto",
            alignItems: "center",
            maxHeight: 60,
            ml: 5,
            mt: 2,
          }}
        >
          <ProfilePhoto photoclass={"sessionUserProfilepic"} profilePic={sessionUser.profilePic} />
          <Box sx={{ display: "flex", gap: 1, justifyContent: "flex-start", width: 200 }}>
            <Box>{sessionUser.name}</Box>
            <Box>{sessionUser.lastname}</Box>
          </Box>
        </Box>
        <Box sx={{ mt: 1, ml: 13 }}>Lugar: {data.location}</Box>
        <Box sx={{ mt: 1, ml: 13, mb: 3 }}>Status: {data.status.requested}</Box>
        <Divider variant="middle" />
      </>
    );
  }
};

export default SessionInfoContainer;
