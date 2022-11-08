import React from "react";
import { Formik, Form } from "formik";
import { Box, MenuItem } from "@mui/material";
import CustomInput from "../../Inputs/CustomInput";
import { photographerRegisterSchema } from "../../schemas";
import CustomSelect from "../../Inputs/CustomSelect";
import "./PhotographerRegistrationFormOld.css";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import Button from "../../Inputs/Button/Button";
import { createPhotographer } from "../../../services/registerPhotographer";
import { ReactComponent as ReactLogo } from "../../../assets/Logo/Logo.svg";

const PhotographerRegistrationFormOld = () => {
  const navigate = useNavigate();
  const onSubmit = async (values, actions) => {
    createPhotographer(values);
    actions.resetForm();
    navigate("/login");
  };
  return (
    <Formik
      sx={{ height: "auto", m: 1 }}
      initialValues={{ username: "", gender: "o" }}
      //validationSchema={photographerRegisterSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form
          sx={{ display: "grid", gridTemplateRows: "repeat(4, 1fr)", flexWrap: "wrap" }}
          className="form-container"
        >
          <Container>
            <ReactLogo className="photographer-registration-logo" color="black" />
            <Paper elevation={8}>
              <Grid
                className="main-container"
                container
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <Grid item xs={12} sm={6} md={3}>
                  <div className="form-info">
                    <h3>Información</h3>
                  </div>
                  <div className="form-section-two">
                    <CustomInput sx={{ m: 0.5 }} label="Nickname" name="username" type="text" />
                    <CustomInput sx={{ m: 0.5 }} label="Nombre" name="name" type="text" />
                    <CustomInput sx={{ m: 0.5 }} label="Apellido" name="lastname" type="text" />
                    <CustomInput sx={{ m: 0.5 }} label="Genero" name="gender" type="text" />
                  </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <div className="form-direction">
                    <h3>Dirección</h3>
                  </div>
                  <CustomInput sx={{ m: 0.5 }} label="País" name="country" type="text" />
                  <CustomInput sx={{ m: 0.5 }} label="Ciudad" name="city" type="text" />
                  <CustomInput sx={{ m: 0.5 }} label="Estado" name="state" type="text" />
                  <CustomInput sx={{ m: 0.5 }} label="Colonia" name="suburb" type="text" />
                  <CustomInput sx={{ m: 0.5 }} label="Calle" name="street" type="text" />
                  <CustomInput sx={{ m: 0.5 }} label="Número de casa" name="number" type="text" />
                  <CustomInput sx={{ m: 0.5 }} label="Código postal" name="zipCode" type="text" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <div className="form-contact">
                    <h3>Contacto</h3>
                  </div>
                  <CustomInput sx={{ m: 0.5 }} label="Email" name="email" type="email" />
                  <CustomInput
                    sx={{ m: 0.5 }}
                    label="Número telefónico"
                    name="phoneNumber"
                    type="text"
                  />
                  <CustomInput sx={{ m: 0.5 }} label="Facebook" name="facebook" type="text" />
                  <CustomInput sx={{ m: 0.5 }} label="Instagram" name="instagram" type="text" />
                  <CustomInput sx={{ m: 0.5 }} label="www:" name="www:" type="text" />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <div className="form-password">
                    <h3>Contraseña</h3>
                  </div>
                  <CustomInput
                    sx={{ m: 0.5 }}
                    label="Contraseña"
                    name="password"
                    type="password"
                    size="small"
                    autoComplete="new-password"
                  />
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
              <Box sx={{ display: "flex", ml: 6, mb: 12 }}>
                <Button
                  sx={{ zIndex: "modal" }}
                  disabled={isSubmitting}
                  type="submit"
                  text={"Submit"}
                  name={"Enviar"}
                  className={"button-basic-registration"}
                />
              </Box>
            </Paper>
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default PhotographerRegistrationFormOld;
