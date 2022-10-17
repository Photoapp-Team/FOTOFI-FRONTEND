import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./BasicRegistrationForm.css";
import { Formik, Form } from "formik";
import CustomInput from "./CustomInput";
import { registerSchema } from "../schemas";
import { createBasicUser } from "../../services/registerUser";

const onSubmit = async (values, actions) => {
  createBasicUser(values);
  actions.resetForm();
};

const BasicRegistrationForm = () => {
  return (
    <div className="box-container">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 550,
            height: 550,
          },
        }}
      >
        <Paper elevation={3}>
          <Formik
            initialValues={{ username: "", gender: "" }}
            validationSchema={registerSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="form-container">
                <br />
                <CustomInput
                  label="Nombre"
                  name="name"
                  type="text"
                  placeholder="Ingresa tu nombre"
                />
                <CustomInput
                  label="Apellido"
                  name="lastname"
                  type="text"
                  placeholder="Ingresa tu apellido"
                />

                <CustomInput
                  label="Username"
                  name="username"
                  type="text"
                  placeholder="Ingresa tu nombre de usuario"
                />

                <CustomInput
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Ingresa tu email"
                />
                <CustomInput
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Escribe una contraseña"
                />
                <CustomInput
                  label="ConfirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Escribe una contraseña"
                />
                <div className="button-container">
                  <button disabled={isSubmitting} type="submit">
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </Paper>
      </Box>
    </div>
  );
};

export default BasicRegistrationForm;
