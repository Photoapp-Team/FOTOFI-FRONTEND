import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material";
import { Field } from "formik";
import React, { useState } from "react";

const Confirm = ({ setFieldValue }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    setFieldValue("checked", event.target.checked);
  };

  return (
    <Box sx={{ width: "100%", textAlign: "flex-start" }}>
      <Typography variant="subtitle1">
        Al registrarte estás de acuerdo con que se muestre tu información a posibles clientes.{" "}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 5 }}>
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
                checked={checked}
                onChange={handleChange}
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
