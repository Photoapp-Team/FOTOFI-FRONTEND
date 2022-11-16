import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material";
import { Field } from "formik";
import React from "react";

const Confirm = () => {
  return (
    <Box sx={{ width: "100%", textAlign: "center" }}>
      <Typography variant="subtitle1">
        Al registrarte estás de acuerdo con que se muestre tu información a posibles clientes.{" "}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                sx={{
                  color: "#42B7D0",
                  "&.Mui-checked": {
                    color: "#42B7D0",
                  },
                }}
              />
            }
            label="Estoy de acuerdo"
          />
        </FormGroup>
      </Box>
    </Box>
  );
};

export default Confirm;
