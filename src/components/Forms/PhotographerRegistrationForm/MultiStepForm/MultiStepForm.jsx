import { MobileStepper, Paper, Step, StepLabel, Stepper, useMediaQuery } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import { useState, Children } from "react";
import FormNavigation from "../FormNavigation/FormNavigation";
import Confirm from "../Steps/Confirm/Confirm";
import FormBasicInfo from "../Steps/FormBasicInfo";
import FormPersonalData from "../Steps/FormPersonalData/FormPersonalData";
import { photographerRegisterSchema } from "../../../schemas/index";
import "./MultiStepForm.css";

const MultiStepForm = ({ children, initialValues, onSubmit }) => {
  const emptyOption = { label: "Por favor selecciona una opción", value: "default" };
  const [stepNumber, setStepNumber] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [snapshot, setSnapshot] = useState(initialValues);

  const steps = ["Información Básica", "Datos de Contacto", "Confirmación"];

  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = activeStep === steps.length - 1;

  function _renderStepContent(step, setFieldValue) {
    switch (step) {
      case 0:
        return <FormBasicInfo setFieldValue={setFieldValue} />;
      case 1:
        return <FormPersonalData />;
      case 2:
        return <Confirm />;
      default:
        return <div>Not Found</div>;
    }
  }

  const next = (values) => {
    setSnapshot(values);
    setStepNumber(stepNumber + 1);
    setActiveStep(activeStep + 1);
  };

  const previous = (values) => {
    setSnapshot(values);
    setStepNumber(stepNumber - 1);
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = async (values, actions) => {
    if (isLastStep) {
      return onSubmit(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      next(values);
    }
  };

  const phone = useMediaQuery("(max-width: 425px)");

  return (
    <Formik
      sx={{ height: "auto", m: 1 }}
      initialValues={{
        username: "",
        name: "",
        lastname: "",
        gender: emptyOption.value,
        email: "",
        password: "",
        confirmPassword: "",
        country: "",
        city: "",
        state: "",
        suburb: "",
        street: "",
        number: "",
        zipCode: "",
        phoneNumber: "",
        facebook: "",
        instagram: "",
        www: "",
        photoTags: [],
      }}
      validationSchema={photographerRegisterSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, values }) => (
        <Paper
          elevation={8}
          sx={{
            display: "flex",
            justifyContent: "center",
            m: "auto",
            width: "60%",
          }}
          className="paperMultiStepForm"
        >
          <Form
            initialValues={snapshot}
            sx={{
              display: "flex",
              justifyContent: "center",
              m: "auto",
              width: "70%",
              maxWidth: "70%",
            }}
            className="formMultiStepForm"
          >
            {phone ? (
              <MobileStepper
                variant="dots"
                steps={3}
                activeStep={activeStep}
                sx={{
                  maxWidth: 400,
                  height: "20px",
                  flexGrow: 1,
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                }}
              ></MobileStepper>
            ) : (
              <Stepper activeStep={activeStep} sx={{ px: 10, py: 5 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            )}

            {_renderStepContent(stepNumber, setFieldValue)}
            <FormNavigation
              isLastStep={isLastStep}
              phone={phone}
              hasPrevious={stepNumber > 0}
              onBackClick={() => previous(values)}
            />
          </Form>
        </Paper>
      )}
    </Formik>
  );
};

export default MultiStepForm;

export const FormStep = ({ children }) => children;
