import * as React from "react";
import Button from "@mui/material/Button";
import MultiStepForm, { FormStep } from "./MultiStepForm";
import CustomInput from "../../Inputs/CustomInput";
import Confirm from "./Steps/Confirm";
import ImageUpload from "../../../services/ImageUpload";
import { Box } from "@mui/system";
import { FormControl, FormControlLabel, FormGroup, FormLabel, Grid, MenuItem } from "@mui/material";
import CustomSelect from "../../Inputs/CustomSelect";
import { useState } from "react";
import { Form, Formik } from "formik";
import { useEffect } from "react";
import axios from "axios";
import Checkbox from "@mui/material/Checkbox";

const PhotographerRegistrationForm = () => {
  const emptyOption = { label: "Por favor selecciona una opción", value: "default" };
  const [error, setError] = useState(null);
  const [checked, setChecked] = useState(true);
  const [categories, setCategories] = useState([emptyOption]);
  const [loading, setLoading] = useState(false);
  const { REACT_APP_API_ENDPOINT } = process.env;
  const url = `${REACT_APP_API_ENDPOINT}/services`;
  const [photoTags, setPhotoTags] = useState([]);

  const handleChangeCheckBox = (e) => {
    console.log(e.target.value);
    setPhotoTags([...photoTags, e.target.value]);
    console.log(photoTags);
  };

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

  return (
    <>
      <MultiStepForm
        initialValues={{
          username: "",
          name: "",
          lastname: "",
          gender: emptyOption.value,
          email: "",
          password: "",
          confirmPassword: "",
          country: "",
          city: "",
          state: "",
          suburb: "",
          street: "",
          number: "",
          zipCode: "",
          phoneNumber: "",
          facebook: "",
          instagram: "",
          www: "",
          photoTags: [],
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
          console.log(values);
        }}
      >
        <FormStep stepName="Información Básica" onSubmit={() => console.log("Step1 onSubmit")}>
          <Box sx={{ width: "100%" }}>
            <Grid container spacing={2}>
              <Grid xs={12} sm={12} sx={{ textAlign: "center", mb: 5 }}>
                <h3>Información Básica</h3>
              </Grid>
              <Grid
                xs={12}
                sm={12}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                  m: "auto",
                  alignItems: "center",
                }}
              >
                <ImageUpload
                  phrase={"Tutututu"}
                  classbox={"boxRegister1"}
                  classpaper={"paperRegister1"}
                  name="displayPhotos"
                  fieldName={"displayPhotos"}
                />
                <CustomInput sx={{ m: 0.5 }} label="Nickname" name="username" type="text" />
              </Grid>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2 }}
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
                <Grid xs={6}>
                  <CustomInput sx={{ m: 0.5 }} label="Nombre" name="name" type="text" />
                </Grid>
                <Grid xs={6}>
                  <CustomInput sx={{ m: 0.5 }} label="Apellido" name="lastname" type="text" />
                </Grid>
                <Grid xs={6}>
                  <Box component="span">Género</Box>
                  <CustomSelect sx={{ m: 0.5 }} label="Genero" name="gender" defaultValue="default">
                    <MenuItem value="default">Por favor selecciona</MenuItem>
                    <MenuItem value="H">H</MenuItem>
                    <MenuItem value="M">M</MenuItem>
                    <MenuItem value="O">Otro</MenuItem>
                  </CustomSelect>
                </Grid>
                <Grid xs={6}>
                  <CustomInput sx={{ m: 0.5 }} label="Email" name="email" type="email" />
                </Grid>
                <Grid xs={6}>
                  <CustomInput
                    sx={{ m: 0.5 }}
                    label="Contraseña"
                    name="password"
                    type="password"
                    size="small"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid xs={6}>
                  <CustomInput
                    sx={{ m: 0.5 }}
                    label="Confirmar contraseña"
                    name="confirmPassword"
                    type="password"
                    size="small"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </FormStep>
        <FormStep stepName="Datos de contacto" onSubmit={() => console.log("Step2 onSubmit")}>
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
                  control={
                    <Checkbox name="photoTags" value={value} onChange={handleChangeCheckBox} />
                  }
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
        </FormStep>
        <FormStep stepName="Confirmación">
          <Confirm />
        </FormStep>
      </MultiStepForm>
    </>
  );
};

export default PhotographerRegistrationForm;
