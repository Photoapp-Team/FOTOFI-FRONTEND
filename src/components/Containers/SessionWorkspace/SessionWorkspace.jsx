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
import ApproveSession from "../ApproveSession/ApproveSession";
import CancelledSession from "../CancelledSession/CancelledSession";
import { useState } from "react";
import { useEffect } from "react";
import ConfirmPaymentSession from "../ConfirmPaymentSession/ConfirmPaymentSession";

const SessionWorkspace = () => {
  const [statusWorkspace, setStatusWorkspace] = useState("");
  const params = useParams();
  const { id } = params;
  const { REACT_APP_API_ENDPOINT } = process.env;
  const url = `${REACT_APP_API_ENDPOINT}/sessions/session/${id}`;
  const { data, sessionUser } = useFetchUniqueSession(url);
  const currentUserId = localStorage.getItem("userId");

  useEffect(() => {}, [statusWorkspace]);

  if (data && currentUserId === data.photographerId[0]) {
    if (data && sessionUser) {
      const currentStatus = statusFormater(data.status).reverse()[0];
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
              <ConfirmSession
                sessionId={data._id}
                data={data}
                sessionUser={sessionUser}
                setStatusWorkspace={setStatusWorkspace}
                statusWorkspace={statusWorkspace}
              />
            </Box>
          </>
        );
      } else if (currentStatus === "Aprobada") {
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
              <ConfirmPaymentSession sessionId={data._id} setStatusWorkspace={setStatusWorkspace} />
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
                <SessionFinalUpload
                  id={id}
                  selectedPics={data.selectedPics}
                  setStatusWorkspace={setStatusWorkspace}
                />
              </Box>
            </Box>
          </>
        );
      } else if (currentStatus === "Cancelada") {
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
                <CancelledSession user={"usuario"} setStatusWorkspace={setStatusWorkspace} />
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
  } else if (data && data.userId[0] === data.userId[0]) {
    if (data && sessionUser) {
      const currentStatus = statusFormater(data.status).reverse()[0];
      if (currentStatus === "Programada") {
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
              <ApproveSession
                data={data}
                sessionId={data._id}
                setStatusWorkspace={setStatusWorkspace}
              />
            </Box>
          </>
        );
      } else if (currentStatus === "Por seleccionar") {
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
              <ImageContainer
                previewPics={data.previewPics}
                loaded={true}
                sessionId={data.Id}
                setStatusWorkspace={setStatusWorkspace}
              />
              ;
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
              <RateSession data={data} />;
            </Box>
          </>
        );
      } else if (currentStatus === "Cancelada") {
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
                <CancelledSession user={"fotógrafo"} />
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
