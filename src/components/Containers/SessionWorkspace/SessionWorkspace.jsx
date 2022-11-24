import { Box, Step, StepLabel, Stepper } from "@mui/material";
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
  const [stepNumber, setStepNumber] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const params = useParams();
  const { id } = params;
  const { REACT_APP_API_ENDPOINT } = process.env;
  const url = `${REACT_APP_API_ENDPOINT}/sessions/session/${id}`;
  const { data, sessionUser, refreshData } = useFetchUniqueSession(url);
  const currentUserId = localStorage.getItem("userId");

  const steps = ["1", "2", "3", "4", "5", "6", "7"];
  const isLastStep = activeStep === steps.length - 1;

  const next = () => {
    console.log("entraste al next");
    setStepNumber(stepNumber + 1);
    setActiveStep(activeStep + 1);
  };

  useEffect(() => {
    refreshData();
  }, [statusWorkspace]);

  console.log({ activeStep });

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
              {/* <Stepper activeStep={activeStep} sx={{ py: 5 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper> */}
              <ConfirmSession
                sessionId={data._id}
                data={data}
                sessionUser={sessionUser}
                setStatusWorkspace={setStatusWorkspace}
                statusWorkspace={statusWorkspace}
                next={next}
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
              {/* <Stepper activeStep={activeStep} sx={{ py: 5 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper> */}
              <ConfirmPaymentSession
                sessionId={data._id}
                setStatusWorkspace={setStatusWorkspace}
                next={next}
              />
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
              {/* <Stepper activeStep={activeStep} sx={{ py: 5 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper> */}
              <SessionPrevUpload
                sessionId={data._id}
                setStatusWorkspace={setStatusWorkspace}
                next={next}
              />
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
              {/* <Stepper activeStep={activeStep} sx={{ py: 5 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper> */}
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <SessionFinalUpload
                  sessionId={data._id}
                  selectedPics={data.selectedPics}
                  setStatusWorkspace={setStatusWorkspace}
                  next={next}
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
              {/* <Stepper activeStep={activeStep} sx={{ py: 5 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper> */}
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
              {/* <Stepper activeStep={activeStep} sx={{ py: 5 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper> */}
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
              {/* <Stepper activeStep={activeStep} sx={{ py: 5 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper> */}
              <ApproveSession
                data={data}
                sessionId={data._id}
                setStatusWorkspace={setStatusWorkspace}
                next={next}
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
              </Box>{" "}
              {/* <Stepper activeStep={activeStep} sx={{ py: 5 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper> */}
              <ImageContainer
                previewPics={data.previewPics}
                loaded={true}
                sessionId={data._id}
                setStatusWorkspace={setStatusWorkspace}
                next={next}
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
              {/* <Stepper activeStep={activeStep} sx={{ py: 5 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper> */}
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
              {/* <Stepper activeStep={activeStep} sx={{ py: 5 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper> */}
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
              {/* <Stepper activeStep={activeStep} sx={{ py: 5 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper> */}
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
