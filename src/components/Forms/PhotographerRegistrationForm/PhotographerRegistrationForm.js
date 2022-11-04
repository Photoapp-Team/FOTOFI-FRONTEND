import React from "react";
import { Formik, Form } from "formik";
import { MenuItem } from "@mui/material";
import CustomInput from "../../Inputs/CustomInput";
import { photographerRegisterSchema } from "../../schemas";
import CustomSelect from "../../Inputs/CustomSelect";
import "./PhotographerRegistrationForm.css";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import Button from "../../Inputs/Button/Button";
import { createPhotographer } from "../../../services/registerPhotographer";
import { ReactComponent as ReactLogo } from "../../../assets/Logo/Logo.svg";


const PhotographerRegistrationForm = () => {
  const navigate = useNavigate();
  const onSubmit = async (values, actions) => {
    createPhotographer(values);
    actions.resetForm();
    navigate("/login");
  };
  return (
    <Formik
      initialValues={{ username: "", gender: "o" }}
      //validationSchema={photographerRegisterSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="form-container">
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
                  <div className="form-section-info">
                    <CustomInput
                      label="Foto de perfil"
                      name="profilePic"
                      type="text"
                    />
                    <CustomInput
                      label="Foto de portada"
                      name="coverPhoto"
                      type="text"
                    />
                  </div>
                  <div className="form-section-two">
                    <CustomInput
                      label="Nickname"
                      name="username"
                      type="text"
                    />
                    <CustomInput
                      label="Nombre"
                      name="name"
                      type="text"
                    />
                    <CustomInput
                      label="Apellido"
                      name="lastname"
                      type="text"
                    />
                    <CustomInput
                      label="Genero"
                      name="gender"
                      type="text"
                    />
                  </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <div className="form-direction">
                    <h3>Dirección</h3>
                  </div>
                  <CustomInput
                    label="País"
                    name="country"
                    type="text"
                  />
                  <CustomInput
                    label="Ciudad"
                    name="city"
                    type="text"
                  />
                  <CustomInput
                    label="Estado"
                    name="state"
                    type="text"
                  />
                  <CustomInput
                    label="Colonia"
                    name="suburb"
                    type="text"
                  />
                  <CustomInput
                    label="Calle"
                    name="street"
                    type="text"
                  />
                  <CustomInput
                    label="Número de casa"
                    name="number"
                    type="text"
                  />
                  <CustomInput
                    label="Código postal"
                    name="zipCode"
                    type="text"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <div className="form-contact">
                    <h3>Contacto</h3>
                  </div>
                  <CustomInput
                    label="Email"
                    name="email"
                    type="email"
                  />
                  <CustomInput
                    label="Número telefónico"
                    name="phoneNumber"
                    type="text"
                  />
                  <CustomInput
                    label="Facebook"
                    name="facebook"
                    type="text"
                  />
                  <CustomInput
                    label="Instagram"
                    name="instagram"
                    type="text"
                  />
                  <CustomInput
                    label="www:"
                    name="www:"
                    type="text"
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <div className="form-password">
                    <h3>Contraseña</h3>
                  </div>
                  <CustomInput
                    label="Contraseña"
                    name="password"
                    type="password"
                    size="small"
                    autoComplete="new-password"
                  />
                  <CustomInput
                    label="Confirmar contraseña"
                    name="confirmPassword"
                    type="password"
                    size="small"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Button
                disabled={isSubmitting}
                type="submit"
                text={"Submit"}
                name={"Enviar"}
                className={"button-basic-registration"}
              />
            </Paper>
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default PhotographerRegistrationForm;
