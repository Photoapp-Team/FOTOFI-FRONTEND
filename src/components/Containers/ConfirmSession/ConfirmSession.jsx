import { Box, CssBaseline } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import { updateSession } from "../../../services/updateSession";
import Button from "../../Inputs/Button/Button";
import CustomInput from "../../Inputs/CustomInput";

const ConfirmSession = ({ sessionId }) => {
  const onSubmit = async (values, actions) => {
    console.log({ values }, { sessionId });
    updateSession(sessionId, values);
    // createPackage(values);
    // actions.resetForm({ values: "" });
    // navigate(`/Profile/${id}`);
  };
  return (
    <>
      <CssBaseline />
      <Formik
        initialValues={{}}
        // validationSchema={addServiceSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form className="formContainer">
            <Box sx={{ m: "auto", textAlign: "center", mb: 10 }}>
              <h1>Detalles de la sesión</h1>
            </Box>
            <Box sx={{ ml: "5rem" }}>
              <h2>Configura la sesión</h2>
            </Box>
            <Box sx={{ ml: "5rem" }}>
              <h4>Precio</h4>
              <Box sx={{ display: "flex", alignItems: "baseline", gap: 1 }}>
                <CustomInput
                  label="Precio"
                  name="price"
                  type="text"
                  placeholder="Precio"
                  size="small"
                />
              </Box>
            </Box>
            <Box sx={{ alignItems: "baseline", gap: 1, ml: "5rem" }}>
              <h4>¿Cuántas fotos incluye? (Preview)</h4>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CustomInput
                  label="Fotos sin Editar"
                  name="quantityPrevPhotos"
                  type="text"
                  placeholder="Min"
                  size="small"
                />
              </Box>
            </Box>
            <Box sx={{ alignItems: "baseline", gap: 1, ml: "5rem" }}>
              <h4>¿Cuántas fotos vas a entregar? </h4>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CustomInput
                  label="Fotos Editadas"
                  name="quantityFinalPhotos"
                  type="text"
                  placeholder="Min"
                  size="small"
                />
              </Box>
            </Box>
            <Box sx={{ ml: "5rem" }}>
              <h4>Tiempo estimado de entrega</h4>
              <CustomInput
                label="Tiempo"
                name="deliveryTime"
                type="text"
                placeholder="Tiempo"
                size="small"
              />
            </Box>
            <Box sx={{ display: "flex", m: "auto", justifyContent: "center", mb: 25 }}>
              <Button
                sx={{ mb: 25 }}
                disabled={isSubmitting}
                type="submit"
                text={"Submit"}
                name={"Confirmar"}
                className={"button-basic-registration"}
              />
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ConfirmSession;
