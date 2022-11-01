import { Box } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { statusFormater } from "../../../services/statusFormater";
import useFetchUniqueSession from "../../../services/useFetchUniqueSession";
import SessionInfoCard from "../../Cards/SessionInfoCard/SessionInfoCard";
import "./SessionWorkspace.css";
import SessionPrevUpload from "../SessionPrevUpload/SessionPrevUpload";
import SessionFinalUpload from "../SessionFinalUpload/SessionFinalUpload";

const SessionWorkspace = () => {
  const params = useParams();
  const { id } = params;
  const { REACT_APP_API_ENDPOINT } = process.env;
  const url = `${REACT_APP_API_ENDPOINT}/sessions/session/${id}`;
  const { data, sessionUser } = useFetchUniqueSession(url);
  if (data && sessionUser) {
    const currentStatus = statusFormater(data.status)[1];

    if (currentStatus === "Pagada") {
      return (
        <>
          <Box className="sessionGallery">
            <Box>
              <SessionInfoCard
                data={data}
                sessionUser={sessionUser}
                currentStatus={currentStatus}
              />
            </Box>
            <SessionPrevUpload id={id} />
          </Box>
        </>
      );
    }
    if (currentStatus === "Fotos seleccionadas")
      return (
        <>
          <Box className="sessionGallery">
            <Box>
              <SessionInfoCard
                data={data}
                sessionUser={sessionUser}
                currentStatus={currentStatus}
              />
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <SessionFinalUpload id={id} selectedPics={data.selectedPics} />
            </Box>
          </Box>
        </>
      );
  }
};

export default SessionWorkspace;
