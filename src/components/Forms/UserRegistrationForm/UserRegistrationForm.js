import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./UserRegistrationForm.css";
import { Formik, Form } from "formik";
import CustomInput from "../../Inputs/CustomInput";
import { registerSchema } from "../../schemas";
import { useNavigate } from "react-router-dom";
import { createBasicUser } from "../../../services/registerUser";
import { ReactComponent as ReactLogo } from "../../../assets/Logo/Logo.svg";
import { Button, Grid } from "@mui/material";

const UserRegistrationForm = () => {
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    createBasicUser(values);
    actions.resetForm();
    navigate("/login");
  };

  return (
    <Paper elevation={3} sx={{}}>
      <Box className="userRegistrationLogo">
        <ReactLogo className="userRegistrationLogo" color="black" />
      </Box>
      <div className="box-layout-basic-registration">
        <h4 className="basic-registration-title">Crear una cuenta</h4>
        <Formik
          initialValues={{ username: "", gender: "" }}
          validationSchema={registerSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="form-container-basic-registration">
              <Grid container sx={{ textAlign: "center", px: 2 }}>
                <br />
                <Grid item sm={12} md={12}>
                  <CustomInput
                    label="Nombre"
                    name="name"
                    type="text"
                    placeholder="Ingresa tu nombre"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item sm={12} md={12}>
                  <CustomInput
                    label="Apellido"
                    name="lastname"
                    type="text"
                    placeholder="Ingresa tu apellido"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item sm={12} md={12}>
                  <CustomInput
                    label="Username"
                    name="username"
                    type="text"
                    placeholder="Ingresa tu nombre de usuario"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item sm={12} md={12}>
                  <CustomInput
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Ingresa tu email"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item sm={12} md={12}>
                  <CustomInput
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Escribe una contrase??a"
                    size="small"
                    autoComplete="new-password"
                    fullWidth
                  />
                </Grid>
                <Grid item sm={12} md={12}>
                  <CustomInput
                    label="ConfirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Escribe una contrase??a"
                    size="small"
                    autoComplete="new-password"
                    fullWidth
                  />
                </Grid>
                <Grid item sm={12} md={12}>
                  <Button
                    sx={{ mt: "2px" }}
                    disabled={isSubmitting}
                    type="submit"
                    text={"Submit"}
                    name={"Enviar"}
                    variant="secondary"
                    children="Enviar"
                  />
                </Grid>
                <Grid item sm={12} md={12}>
                  <p className="basic-registration-text">
                    ??Ya eres usuario?
                    <a href="/Login">
                      <span className="basic-registration-text-link"> Inicia sesi??n</span>
                    </a>
                  </p>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
    </Paper>
  );
};

export default UserRegistrationForm;
