import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./LoginForm.css";
import { Formik, Form } from "formik";
import CustomInput from "../../Inputs/CustomInput";
import { useUser } from "../../../contexts/UserContext";
import Button from "../../Inputs/Button/Button";
import { Navigate } from "react-router-dom";

const LoginForm = () => {
  const { setLogStatus } = useUser();
  const { login } = useUser();

  const onSubmit = (values, actions) => {
    login(values);
    actions.resetForm();
    setLogStatus(true);
    Navigate("/Profile");
  };

  return (
    <div className="box-container-login">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 500,
            height: 500,
          },
        }}
      >
        <Paper elevation={3}>
          <div className="box-layout-login">
            <h1 className="login-title">Inicio de sesión</h1>
            <p className="login-text">
              ¿Eres un nuevo usuario?
              <a href="/Registration">
                <span className="login-text-link"> Crear una cuenta</span>
              </a>
            </p>
            <Formik initialValues={{ username: "", gender: "" }} onSubmit={onSubmit}>
              {({ isSubmitting }) => (
                <Form className="form-container-login">
                  <br />
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
                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    name={"Enviar"}
                    className={"buttonLogin"}
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

export default LoginForm;
