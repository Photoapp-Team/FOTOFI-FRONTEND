import { Box } from "@mui/material";
import React from "react";

const CancelledSession = ({ user }) => {
  return (
    <Box>
      <h3>
        El {user} ha cancelado la sesión, por favor ponte en contacto con él para que la reagende a
        la brevedad{" "}
      </h3>
    </Box>
  );
};

export default CancelledSession;
