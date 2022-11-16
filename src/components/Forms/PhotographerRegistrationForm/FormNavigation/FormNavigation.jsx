import { Box } from "@mui/material";
import React from "react";
import Button from "../../../Inputs/Button/Button";
import "./FormNavigation.css";

const FormNavigation = (props) => {
  const { phone } = props;
  return (
    <Box sx={{ display: "flex", width: "80%", my: "30px", mx: "auto" }} className="formNavigation">
      {props.hasPrevious && (
        <Button
          name={phone ? "Atras" : "Atrás"}
          type="button"
          className={phone ? "button-basic-registration-mobile" : "button-basic-registration"}
          onClick={props.onBackClick}
        />
      )}
      <Button
        type="submit"
        text={"Submit"}
        className={phone ? "button-basic-registration-mobile" : "button-basic-registration"}
        name={props.isLastStep ? "Enviar" : phone ? "Siguiente" : "Siguiente"}
      />
    </Box>
  );
};

export default FormNavigation;
