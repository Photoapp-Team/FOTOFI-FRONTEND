import { Paper } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import CustomInput from "../../../Inputs/CustomInput";

const FormPersonalData = () => {
  const onSubmit = () => {
    console.log("estas en personal data");
  };
  return (
    <Formik
      sx={{ height: "auto", m: 1 }}
      initialValues={{}}
      //validationSchema={photographerRegisterSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form
          sx={{ display: "grid", gridTemplateRows: "repeat(4, 1fr)", flexWrap: "wrap" }}
          className="form-container"
        >
          <Paper elevation={8}>
            <div className="form-info">
              <h3>Información</h3>
            </div>
            <CustomInput sx={{ m: 0.5 }} label="País" name="country" type="text" />
            <CustomInput sx={{ m: 0.5 }} label="Ciudad" name="city" type="text" />
            <CustomInput sx={{ m: 0.5 }} label="Estado" name="state" type="text" />
            <CustomInput sx={{ m: 0.5 }} label="Colonia" name="suburb" type="text" />
            <CustomInput sx={{ m: 0.5 }} label="Calle" name="street" type="text" />
            <CustomInput sx={{ m: 0.5 }} label="Número de casa" name="number" type="text" />
            <CustomInput sx={{ m: 0.5 }} label="Código postal" name="zipCode" type="text" />
            <div className="form-contact">
              <h3>Contacto</h3>
            </div>
            <CustomInput sx={{ m: 0.5 }} label="Número telefónico" name="phoneNumber" type="text" />
            <CustomInput sx={{ m: 0.5 }} label="Facebook" name="facebook" type="text" />
            <CustomInput sx={{ m: 0.5 }} label="Instagram" name="instagram" type="text" />
            <CustomInput sx={{ m: 0.5 }} label="www:" name="www:" type="text" />
          </Paper>
        </Form>
      )}
    </Formik>
  );
};

export default FormPersonalData;
