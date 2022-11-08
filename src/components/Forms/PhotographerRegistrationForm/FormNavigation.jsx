import React from "react";
import Button from "../../Inputs/Button/Button";

const FormNavigation = (props) => {
  return (
    <div style={{ display: "flex", marginTop: 50, justifyContent: "center", gap: 20 }}>
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
    </div>
  );
};

export default FormNavigation;
