import { Box } from "@mui/material";
import React from "react";
import Button from "../../Inputs/Button/Button";

const FormNavigation = (props) => {
  return (
    <Box sx={{ display: "flex", width: "60%", my: "30px", mx: "auto" }}>
      {props.hasPrevious && (
        <Button
          name={"Atrás"}
          type="button"
          className={"button-basic-registration"}
          onClick={props.onBackClick}
        />
      )}
      <Button
        type="submit"
        text={"Submit"}
        className={"button-basic-registration"}
        name={props.isLastStep ? "Enviar" : "Siguiente"}
      />
    </Box>
  );
};

export default FormNavigation;
