import { Box } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { statusFormater } from "../../../services/statusFormater";
import useFetchUniqueSession from "../../../services/useFetchUniqueSession";
import SessionInfoCard from "../../Cards/SessionInfoCard/SessionInfoCard";
import "./SessionWorkspace.css";
import SessionPrevUpload from "../SessionPrevUpload/SessionPrevUpload";
import SessionFinalUpload from "../SessionFinalUpload/SessionFinalUpload";
import ImageContainer from "../ImagesContainer/ImagesContainer";
import WaitingSessionStatus from "../WaitingSessionStatus/WaitingSessionStatus";
import RateSession from "../RateSession/RateSession";
import ConfirmSession from "../ConfirmSession/ConfirmSession";

const SessionWorkspace = () => {
  const params = useParams();
  const { id } = params;
  const { REACT_APP_API_ENDPOINT } = process.env;
  const url = `${REACT_APP_API_ENDPOINT}/sessions/session/${id}`;
  const { data, sessionUser } = useFetchUniqueSession(url);
  const token = localStorage.getItem("token");
  let currentUserId = "";
  if (token) {
    const payload = token.split(".")[1];
    currentUserId = JSON.parse(atob(payload)).id;
  }
  if (data && currentUserId === data.photographerId[0]) {
    console.log("data en workspace", { data });
    if (data && sessionUser) {
      const currentStatus = statusFormater(data.status).reverse()[0];
      console.log(currentStatus);
      if (currentStatus === "Solicitada") {
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
              <ConfirmSession sessionId={data._id} />
            </Box>
          </>
        );
      } else if (currentStatus === "Pagada") {
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
      } else if (currentStatus === "Fotos seleccionadas") {
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
      } else {
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
                <WaitingSessionStatus user={"usuario"} />
              </Box>
            </Box>
          </>
        );
      }
    }
  } else if (data && currentUserId === data.userId[0]) {
    if (data && sessionUser) {
      const currentStatus = statusFormater(data.status).reverse()[0];
      if (currentStatus === "Por seleccionar") {
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
              <ImageContainer previewPics={data.previewPics} loaded={true} sessionId={data.Id} />;
            </Box>
          </>
        );
      } else if (currentStatus === "Entregada") {
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
              <RateSession />;
            </Box>
          </>
        );
      } else {
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
                <WaitingSessionStatus user={"fotógrafo"} />
              </Box>
            </Box>
          </>
        );
      }
    }
  }
};

export default SessionWorkspace;
