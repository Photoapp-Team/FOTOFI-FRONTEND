import { Paper, Step, StepLabel, Stepper } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import { useState, Children } from "react";
import FormNavigation from "./FormNavigation";

const MultiStepForm = ({ children, initialValues, onSubmit }) => {
  const [stepNumber, setStepNumber] = useState(0);
  const steps = Children.toArray(children);
  const [snapshot, setSnapshot] = useState(initialValues);

  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber === totalSteps - 1;

  const next = (values) => {
    setSnapshot(values);
    setStepNumber(stepNumber + 1);
  };

  const previous = (values) => {
    setSnapshot(values);
    setStepNumber(stepNumber - 1);
  };

  const handleSubmit = async (values, actions) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values);
    }
    if (isLastStep) {
      return onSubmit(values, actions);
    } else {
      actions.setTouched({});
      next(values);
    }
  };

  return (
    <Formik
      sx={{ height: "auto", m: 1 }}
      initialValues={snapshot}
      //validationSchema={photographerRegisterSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Paper elevation={8}>
          <Form
            className="form-container"
            onSubmit={formik.handleSubmit}
            initialValues={snapshot}
            setFieldValue={formik.setFieldValue}
            sx={{ display: "flex", justifyContent: "center", m: "auto" }}
          >
            <Stepper activeStep={stepNumber} sx={{ px: 20, py: 5 }}>
              {steps.map((currentStep) => {
                const label = currentStep.props.stepName;
                return (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {step}
            <FormNavigation
              isLastStep={isLastStep}
              hasPrevious={stepNumber > 0}
              onBackClick={() => previous(formik.values)}
            />
          </Form>
        </Paper>
      )}
    </Formik>
  );
};

export default MultiStepForm;

export const FormStep = ({ children }) => children;
