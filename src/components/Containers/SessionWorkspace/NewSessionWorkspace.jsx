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

const NewSessionWorkspace = () => {
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

  const next = (values) => {
    setStepNumber(stepNumber + 1);
    setActiveStep(activeStep + 1);
  };

  const previous = (values) => {
    setStepNumber(stepNumber - 1);
    setActiveStep(activeStep - 1);
  };

  useEffect(() => {
    refreshData();
  }, [statusWorkspace]);

  function _renderStepContent(step) {
    switch (step) {
      case 0:
        return;
      case 1:
        return;
      case 2:
        return;
      default:
        return <div>Not Found</div>;
    }
  }

  if (data && currentUserId === data.photographerId[0]) {
    if (data && sessionUser) {
      const currentStatus = statusFormater(data.status).reverse()[0];
      return;
    }
  }
};
export default NewSessionWorkspace;
