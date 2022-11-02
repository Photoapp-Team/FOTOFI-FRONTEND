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
            <Paper elevation={3}>
              <Grid
                className="main-container"
                container
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Grid item xs={12} sm={6} md={3}>
                  <div>
                    <h3>Informacion Personal</h3>
                  </div>
                  <div className="form-section">
                    <CustomInput
                      label="profilePic"
                      name="profilePic"
                      type="text"
                      placeholder="Elige una foto de perfil"
                    />
                    <CustomInput
                      label="coverPhoto"
                      name="coverPhoto"
                      type="text"
                      placeholder="Elige una foto de perfil"
                    />
                  </div>
                  <div className="form-section">
                    <CustomInput
                      label="Username"
                      name="username"
                      type="text"
                      placeholder="Ingresa tu nombre de usuario"
                    />
                    <CustomInput
                      label="Name"
                      name="name"
                      type="text"
                      placeholder="Ingresa tu nombre"
                    />
                    <CustomInput
                      label="Lastname"
                      name="lastname"
                      type="text"
                      placeholder="Ingresa tu apellido"
                    />
                  </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <div>
                    <h3>Dirección</h3>
                  </div>
                  <CustomInput
                    label="Country"
                    name="country"
                    type="text"
                    placeholder="Ingresa tu Pais"
                  />
                  <CustomInput
                    label="City"
                    name="city"
                    type="text"
                    placeholder="Ingresa tu Ciudad"
                  />
                  <CustomInput
                    label="State"
                    name="state"
                    type="text"
                    placeholder="Ingresa tu estado"
                  />
                  <CustomInput
                    label="Suburb"
                    name="suburb"
                    type="text"
                    placeholder="Ingresa tu colonia"
                  />
                  <CustomInput
                    label="Street"
                    name="street"
                    type="text"
                    placeholder="Ingresa tu calle"
                  />
                  <CustomInput label="Number" name="number" type="text" placeholder="Número" />
                  <CustomInput label="ZipCode" name="zipCode" type="text" placeholder="C.P." />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <div>
                    <h3>Contacto</h3>
                  </div>
                  <CustomInput
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Ingresa tu email"
                  />
                  <CustomInput
                    label="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    placeholder="Ingresa tu Telefono"
                  />
                  <CustomInput
                    label="facebook"
                    name="facebook"
                    type="text"
                    placeholder="Ingresa tu Facebook"
                  />
                  <CustomInput
                    label="instagram"
                    name="instagram"
                    type="text"
                    placeholder="Ingresa tu instagram"
                  />
                  <CustomInput label="www:" name="www:" type="text" placeholder="Ingresa tu www:" />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <CustomInput
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Escribe una contraseña"
                    size="small"
                    autoComplete="new-password"
                  />
                  <CustomInput
                    label="ConfirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Escribe una contraseña"
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
