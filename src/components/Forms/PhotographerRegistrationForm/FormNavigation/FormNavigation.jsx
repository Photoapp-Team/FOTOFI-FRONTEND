import { Box, Button } from "@mui/material";
import React from "react";

import "./FormNavigation.css";

const FormNavigation = (props) => {
  const { phone } = props;
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
      <Button
        type="submit"
        text={"Submit"}
        className="button-basic-registration"
        variant="secondary"
        children={props.isLastStep ? "Enviar" : phone ? "Siguiente" : "Siguiente"}
        name={props.isLastStep ? "Enviar" : phone ? "Siguiente" : "Siguiente"}
      />
    </Box>
  );
};

export default FormNavigation;
