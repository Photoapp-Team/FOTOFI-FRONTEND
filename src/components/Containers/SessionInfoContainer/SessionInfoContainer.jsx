import { Box } from "@mui/material";
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
        <Box sx={{ display: "flex", gap: 1, width: "auto", alignItems: "center", maxHeight: 60 }}>
          <ProfilePhoto photoclass={"sessionUserProfilepic"} profilePic={sessionUser.profilePic} />
          <Box sx={{ display: "flex", gap: 4, justifyContent: "space-evenly" }}>
            {sessionUser.name}
            {sessionUser.lastname}
          </Box>
        </Box>
      </>
    );
  }
};

export default SessionInfoContainer;
