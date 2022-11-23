import { Button, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { updateSession } from "../../../services/updateSession";

const ConfirmPaymentSession = ({ sessionId, setStatusWorkspace }) => {
  const onClick = async (value) => {
    const newValue = {
      status: {
        payed: Date.now(),
      },
    };
    const updatedSession = await updateSession(sessionId, newValue);
    setStatusWorkspace(updatedSession);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", my: "20px" }}>
      <Paper
        sx={{ textAlign: "initial", display: "flex", alignItems: "flex-start", m: "auto", gap: 3 }}
      >
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            alignItems: "flex-start",
            m: "auto",
            pl: "1rem",
          }}
        >
          <h4>
            Si el usuario ya pagó el anticipo o la sesión, o si estás de acuerdo en continuar por
            favor da click en aceptar
          </h4>
        </Box>
        <Box
          sx={{ textAlign: "initial", display: "flex", alignItems: "flex-start", m: "auto", p: 5 }}
        >
          <Button
            name="Confirmar"
            variant="secondary"
            children="confirmar"
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
