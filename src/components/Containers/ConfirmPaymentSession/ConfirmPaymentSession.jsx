import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { updateSession } from "../../../services/updateSession";
import Button from "../../Inputs/Button/Button";

const ConfirmPaymentSession = ({ sessionId, setStatusWorkspace }) => {
  const onClick = async (value) => {
    const newValue = {
      status: {
        payed: Date.now(),
      },
    };
    updateSession(sessionId, newValue);
    setStatusWorkspace("payed");
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", my: "20px" }}>
      <Paper sx={{ textAlign: "center", display: "flex", alignItems: "center", m: "auto", gap: 4 }}>
        <Box sx={{ textAlign: "center", display: "flex", alignItems: "center", m: "auto" }}>
          <h4>
            Si el usuario ya pagó el anticipo o la sesión,
            <br /> o si estás de acuerdo en continuar así por favor da click en aceptar
          </h4>
        </Box>
        <Box sx={{ textAlign: "center", display: "flex", alignItems: "center", m: "auto", p: 5 }}>
          <Button
            className="buttonLogin"
            text={"Confirm"}
            name={"Confirmar"}
            onClick={() => {
              onClick();
            }}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default ConfirmPaymentSession;
