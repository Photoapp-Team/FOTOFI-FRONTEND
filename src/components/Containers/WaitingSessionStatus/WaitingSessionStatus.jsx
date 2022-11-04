import { Box } from "@mui/material";
import React from "react";

const WaitingSessionStatus = ({ user }) => {
  return (
    <Box>
      <h3>Por favor espera a que el {user} termine, en breve podrás continuar con la sesión... </h3>
    </Box>
  );
};

export default WaitingSessionStatus;
