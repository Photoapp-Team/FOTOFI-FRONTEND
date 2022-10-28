import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./BasicRegistrationForm.css";
import { Formik, Form, validateYupSchema } from "formik";
import CustomInput from "../../Inputs/CustomInput";
import { registerSchema } from "../../schemas";
import { UserContext, useUser } from "../../../contexts/UserContext";
import { Navigate } from "react-router-dom";
import { createBasicUser } from "../../../services/registerUser";
import Button from "../../Inputs/Button/Button";

const onSubmit = async (values, actions) => {
  createBasicUser(values);
  actions.resetForm();
};

const BasicRegistrationForm = () => {
  return (
    <div className="box-container-basic-registration">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 550,
            height: 600,
          },
        }}
      >
        <Paper elevation={3}>
          <div className="box-layout-basic-registration">
            <h1 className="basic-registration-title">Crear una cuenta</h1>
            <p className="basic-registration-text">
              ¿Ya eres usuario?
              <span className="basic-registration-text-link"> Inicia sesión</span>
            </p>
            <Formik
              initialValues={{ username: "", gender: "" }}
              validationSchema={registerSchema}
              onSubmit={onSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="form-container-basic-registration">
                  <br />
                  <CustomInput
                    label="Nombre"
                    name="name"
                    type="text"
                    placeholder="Ingresa tu nombre"
                    size="small"
                  />
                  <CustomInput
                    label="Apellido"
                    name="lastname"
                    type="text"
                    placeholder="Ingresa tu apellido"
                    size="small"
                  />
                  <CustomInput
                    label="Username"
                    name="username"
                    type="text"
                    placeholder="Ingresa tu nombre de usuario"
                    size="small"
                  />
                  <CustomInput
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Ingresa tu email"
                    size="small"
                  />
                  <CustomInput
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Escribe una contraseña"
                    size="small"
                  />
                  <CustomInput
                    label="ConfirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Escribe una contraseña"
                    size="small"
                  />
                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    text={"Submit"}
                    name={"Enviar"}
                    className={"button-basic-registration"}
                  />
                </Form>
              )}
            </Formik>
          </div>
        </Paper>
      </Box>
    </div>
  );
};

export default BasicRegistrationForm;
