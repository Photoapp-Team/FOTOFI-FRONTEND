import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./LoginForm.css";
import { Formik, Form } from "formik";
import CustomInput from "../../Inputs/CustomInput";
import { useUser } from "../../../contexts/UserContext";
import { Navigate } from "react-router-dom";
import Fotofilogo from "../../../images/fotofi.png";
import { Button, FormControl } from "@mui/material";

const LoginForm = () => {
  const { setLogStatus } = useUser();
  const { login } = useUser();

  const onSubmit = (values, actions) => {
    login(values);
    setLogStatus(true);
    Navigate("/Profile");
  };

  return (
    <div className="box-container-login">
      <Box>
        <Paper
          elevation={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: 2,
            p: 4,
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <div
            className="box-layout-login"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={Fotofilogo}
              className="login-form-fotofi-logo"
              width={250}
              sx={{ p: 2, m: 2 }}
            />
            <h1 className="login-title">Inicio de sesión</h1>
            <Formik
              initialValues={{ username: "", password: "" }}
              onSubmit={onSubmit}
            >
              {({ isSubmitting }) => (
                <Form
                  className="form-container-login"
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <br />
                  <FormControl fullWidth>
                    <CustomInput
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Ingresa tu email"
                      size="small"
                      sx={{ m: 1 }}
                    />
                  </FormControl>
                  <FormControl fullWidth>
                    <CustomInput
                      label="Password"
                      name="password"
                      type="password"
                      placeholder="Escribe una contraseña"
                      size="small"
                      sx={{ m: 1 }}
                      fullWidth
                    />
                  </FormControl>
                  <Button
                    children="Enviar"
                    disabled={isSubmitting}
                    type="submit"
                    name={"Enviar"}
                    variant="secondary"
                    className={"buttonLogin"}
                  />
                  <p className="login-text">
                    ¿Eres un nuevo usuario?
                    <a href="/Registration">
                      <span className="login-text-link"> Crear una cuenta</span>
                    </a>
                  </p>
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
