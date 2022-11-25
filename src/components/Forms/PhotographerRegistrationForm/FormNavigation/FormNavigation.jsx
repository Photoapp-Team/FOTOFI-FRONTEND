import { Box, Button, CircularProgress } from "@mui/material";
import React from "react";

import "./FormNavigation.css";

const FormNavigation = (props) => {
  const { phone, isSubmitting, isLastStep } = props;
  return (
    <Box
      sx={{ display: "flex", width: "80%", my: "30px", mx: "auto", justifyContent: "space-around" }}
      className="formNavigation"
    >
      {props.hasPrevious && (
        <Button
          name={phone ? "Atras" : "Atrás"}
          children={phone ? "Atras" : "Atrás"}
          className="button-basic-registration"
          variant="secondary"
          onClick={props.onBackClick}
        />
      )}
      {isSubmitting && isLastStep ? (
        <CircularProgress />
      ) : (
        <Button
          type="submit"
          text="Submit"
          onSubmit={isSubmitting}
          className="button-basic-registration"
          variant="secondary"
          children={isLastStep ? "Enviar" : phone ? "Siguiente" : "Siguiente"}
          name={isLastStep ? "Enviar" : phone ? "Siguiente" : "Siguiente"}
        />
      )}
    </Box>
  );
};

export default FormNavigation;
