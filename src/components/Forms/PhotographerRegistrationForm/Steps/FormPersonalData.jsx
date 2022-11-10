import * as React from "react";
import { Box } from "@mui/system";
import { FormControl, FormControlLabel, FormGroup, FormLabel, Grid, MenuItem } from "@mui/material";
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
    <Box>
      <Grid container spacing={3} sx={{ width: "90%", m: "auto" }}>
        <Grid item xs={12} sm={12} sx={{ textAlign: "center" }}>
          <h3>Dirección</h3>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <CustomInput fullWidth label="País" name="country" type="text" />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <CustomInput fullWidth label="Ciudad" name="city" type="text" />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <CustomInput fullWidth label="Estado" name="state" type="text" />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <CustomInput fullWidth label="Colonia" name="suburb" type="text" />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <CustomInput fullWidth label="Calle" name="street" type="text" />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <CustomInput fullWidth label="Número de casa" name="number" type="text" />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <CustomInput fullWidth label="Código postal" name="zipCode" type="text" />
          </FormControl>
        </Grid>
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
          <FormGroup sx={{ ml: 30 }}>
            <FormLabel component="legend">Selecciona hasta 3</FormLabel>
            {categories.map(({ label, value }, index) => (
              <FormControl>
                <FormControlLabel key={index} control={<Field type="checkbox" name="photoTags" value={value} />} label={label} />
              </FormControl>
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
      </Grid>
    </Box>
  );
};

export default FormPersonalData;
