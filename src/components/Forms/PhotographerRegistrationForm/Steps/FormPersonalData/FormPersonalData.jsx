import * as React from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Field } from "formik";
import { useEffect } from "react";
import axios from "axios";
import CustomInput from "../../../../Inputs/CustomInput";
import "./FormPersonalData.css";

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

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} sx={{ textAlign: "center" }}>
        <h3>Dirección</h3>
        <Typography sx={{ fontSize: "14px" }}>
          *Llena sólo los campos que quieres que se muestren como usuario PRO
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <CustomInput fullWidth label="País" name="country" type="text" sx={{ fontSize: "5px" }} />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <CustomInput fullWidth label="Estado" name="state" type="text" />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={12}>
        <FormControl fullWidth>
          <CustomInput fullWidth label="Ciudad/Municipio" name="city" type="text" />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={12}>
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
      <Grid item xs={12} sm={12}>
        <FormControl fullWidth>
          <CustomInput fullWidth label="Número telefónico" name="phoneNumber" type="text" />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={12} sx={{ textAlign: "center" }}>
        <h3>Especialidad y Redes Sociales</h3>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl fullWidth>
          <CustomInput fullWidth label="Facebook" name="facebook" type="text" />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl fullWidth>
          <CustomInput fullWidth label="Instagram" name="instagram" type="text" />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl fullWidth>
          <CustomInput fullWidth label="www:" name="www:" type="text" />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={12} sx={{ mt: "5px" }}>
        <FormLabel component="legend">Selecciona hasta 3</FormLabel>
      </Grid>
      <Grid item xs={12} sx={{ minWidth: "100%" }} className="formPersonalDataList">
        <FormGroup sx={{ width: "100%" }}>
          <List
            style={{
              maxHeight: 150,
              width: "100%",
              overflow: "auto",
              display: "flex",
              flexDirection: "column",
            }}
            className="listScrollbar"
          >
            {categories.map(({ label, value }, index) => (
              <ListItem key={index}>
                <FormControl key={index} style={{ padding: "2px", ml: "10px" }}>
                  <FormControlLabel
                    key={index}
                    className="label-cbx"
                    control={
                      <>
                        <Field
                          type="checkbox"
                          key={index}
                          name="photoTags"
                          value={value}
                          className="invisible"
                          id="cbx"
                        />
                        <Box className="checkbox">
                          <svg width="15px" height="15px" viewBox="0 0 20 20">
                            <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                            <polyline points="4 11 8 15 16 6"></polyline>
                          </svg>
                        </Box>
                      </>
                    }
                    label={label}
                  />
                </FormControl>
              </ListItem>
            ))}
          </List>
        </FormGroup>
      </Grid>
    </Grid>
  );
};

export default FormPersonalData;
