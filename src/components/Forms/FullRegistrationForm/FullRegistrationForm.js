import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { MenuItem, Select } from "@mui/material";
import CustomInput from "../../Inputs/CustomInput";
import { registerSchema } from "../../schemas";
import CustomSelect from "../../Inputs/CustomSelect";
import CssBaseline from "@mui/material/CssBaseline";
import "./FullRegistrationForm.css";

const onSubmit = async (values, actions) => {
  console.log("values", values);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const FullRegistrationForm = () => {
  return (
    <>
      <CssBaseline />
      <Formik
        initialValues={{ username: "", gender: "" }}
        validationSchema={registerSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="form-container">
            <div className="form-section">
              <CustomInput
                label="ProfilePic"
                name="profilepic"
                type="text"
                placeholder="Elige una foto de perfil"
              />
            </div>
            <br />
            <br />
            <div className="form-section">
              <CustomInput label="Name" name="name" type="text" placeholder="Ingresa tu nombre" />
              <CustomInput
                label="Lastname"
                name="lastname"
                type="text"
                placeholder="Ingresa tu apellido"
              />
            </div>
            <br />
            <br />
            <div className="form-section">
              <CustomInput
                label="Username"
                name="username"
                type="text"
                placeholder="Ingresa tu nombre de usuario"
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

              <CustomInput label="Email" name="email" type="email" placeholder="Ingresa tu email" />
            </div>
            <br />
            <br />
            <div>
              <h3>Dirección</h3>
            </div>
            <CustomInput label="City" name="city" type="text" placeholder="Ingresa tu Ciudad" />
            <CustomInput
              label="Suburb"
              name="suburb"
              type="text"
              placeholder="Ingresa tu colonia"
            />
            <CustomInput label="Street" name="street" type="text" placeholder="Ingresa tu calle" />
            <CustomInput label="Number" name="number" type="text" placeholder="Número" />
            <CustomInput label="ZipCode" name="zipCode" type="text" placeholder="C.P." />
            <CustomSelect
              label="Gender"
              name="gender"
              placeholder="Por favor selecciona uno"
              value=""
            >
              <MenuItem value="">Por favor selecciona una opción</MenuItem>
              <MenuItem value="Hombre">Hombre</MenuItem>
              <MenuItem value="Mujer">Mujer</MenuItem>
              <MenuItem value="Otro">Otro</MenuItem>
            </CustomSelect>
            <button disabled={isSubmitting} type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FullRegistrationForm;
