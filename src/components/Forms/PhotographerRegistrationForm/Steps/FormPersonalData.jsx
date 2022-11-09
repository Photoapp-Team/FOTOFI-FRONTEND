import * as React from "react";
import { Box } from "@mui/system";
import { FormControlLabel, FormGroup, FormLabel, Grid, MenuItem } from "@mui/material";
import { useState } from "react";
import { Field } from "formik";
import { useEffect } from "react";
import axios from "axios";
import CustomInput from "../../../Inputs/CustomInput";

const FormPersonalData = () => {
  const emptyOption = { label: "Por favor selecciona una opción", value: "default" };
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([emptyOption]);
  const [loading, setLoading] = useState(false);
  const { REACT_APP_API_ENDPOINT } = process.env;
  const url = `${REACT_APP_API_ENDPOINT}/services`;

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);

        const response = await axios.get(url);
        if (response) {
        }
        // setData(response.data.data.services);
        const options = response.data.data.services.map((service) => ({
          label: service.name,
          value: service.name,
        }));
        setCategories([...options]);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const onSubmit = () => {
    console.log("estas en personal data");
  };
  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <h3>Dirección</h3>
      </Box>
      <Box
        sx={{
          display: "flex",
          px: 30,
          py: 2,
          justifyContent: "space-around",
          textAlign: "center",
          m: "auto",
          alignItems: "center",
        }}
      >
        <CustomInput sx={{ m: 0.5 }} label="País" name="country" type="text" />
        <CustomInput sx={{ m: 0.5 }} label="Ciudad" name="city" type="text" />
      </Box>
      <Box
        sx={{
          display: "flex",
          px: 30,
          py: 2,
          justifyContent: "space-around",
          textAlign: "center",
          m: "auto",
          alignItems: "center",
        }}
      >
        <CustomInput sx={{ m: 0.5 }} label="Estado" name="state" type="text" />
        <CustomInput sx={{ m: 0.5 }} label="Colonia" name="suburb" type="text" />
      </Box>
      <Box
        sx={{
          display: "flex",
          px: 30,
          py: 2,
          justifyContent: "space-around",
          textAlign: "center",
          m: "auto",
          alignItems: "center",
        }}
      >
        <CustomInput sx={{ m: 0.5 }} label="Calle" name="street" type="text" />
        <CustomInput sx={{ m: 0.5 }} label="Número de casa" name="number" type="text" />
        <CustomInput sx={{ m: 0.5 }} label="Código postal" name="zipCode" type="text" />
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <h3>Datos de Contacto</h3>
      </Box>
      <Box
        sx={{
          display: "flex",
          px: 30,
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          m: "auto",
          alignItems: "center",
        }}
      >
        <CustomInput sx={{ m: 0.5 }} label="Número telefónico" name="phoneNumber" type="text" />
      </Box>
      <Box sx={{ display: "flex" }}>
        <FormGroup>
          <FormLabel component="legend">Selecciona hasta 3</FormLabel>
          {categories.map(({ label, value }, index) => (
            <FormControlLabel
              key={index}
              control={<Field type="checkbox" name="photoTags" value={value} />}
              label={label}
            />
          ))}
        </FormGroup>
      </Box>
      <Box
        sx={{
          display: "flex",
          px: 30,
          py: 2,
          justifyContent: "space-around",
          textAlign: "center",
          m: "auto",
          alignItems: "center",
        }}
      >
        <CustomInput sx={{ m: 0.5 }} label="Facebook" name="facebook" type="text" />
        <CustomInput sx={{ m: 0.5 }} label="Instagram" name="instagram" type="text" />
        <CustomInput sx={{ m: 0.5 }} label="www:" name="www:" type="text" />
      </Box>
    </>
  );
};

export default FormPersonalData;
