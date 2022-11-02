import { Box, CssBaseline, Paper } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import { updateSession } from "../../../services/updateSession";
import Button from "../../Inputs/Button/Button";
import CustomInput from "../../Inputs/CustomInput";
import "./ConfirmSession.css";

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
          <Paper sx={{ width: 500, height: "auto", m: "auto" }}>
            <Form
              sx={{
                display: "flex",
                width: 250,
                m: "auto",
                p: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box sx={{ m: "auto", textAlign: "center" }}>
                <h1>Detalles de la sesión</h1>
              </Box>
              <Box sx={{ m: "auto", textAlign: "center" }}>
                <h2>Configura la sesión</h2>
              </Box>
              <Box sx={{ m: "auto", textAlign: "center" }}>
                <h4 className="confirmSessionText">Precio</h4>

                <CustomInput
                  sx={{ width: 250 }}
                  label="Precio"
                  name="price"
                  type="text"
                  placeholder="Precio"
                  size="small"
                />
              </Box>
              <Box sx={{ m: "auto", textAlign: "center" }}>
                <h4 className="confirmSessionText">¿Cuántas fotos incluye? (Preview)</h4>
                <Box sx={{ m: "auto", textAlign: "center" }}>
                  <CustomInput
                    sx={{ width: 250 }}
                    label="Fotos sin Editar"
                    name="quantityPrevPhotos"
                    type="text"
                    placeholder="Min"
                    size="small"
                  />
                </Box>
              </Box>
              <Box sx={{ m: "auto", textAlign: "center" }}>
                <h4 className="confirmSessionText">¿Cuántas fotos vas a entregar? </h4>
                <Box sx={{ m: "auto", textAlign: "center" }}>
                  <CustomInput
                    sx={{ width: 250 }}
                    label="Fotos Editadas"
                    name="quantityFinalPhotos"
                    type="text"
                    placeholder="Min"
                    size="small"
                  />
                </Box>
              </Box>
              <Box sx={{ m: "auto", textAlign: "center" }}>
                <h4 className="confirmSessionText">Tiempo estimado de entrega</h4>
                <CustomInput
                  sx={{ width: 250 }}
                  label="Tiempo"
                  name="deliveryTime"
                  type="text"
                  placeholder="Tiempo"
                  size="small"
                />
              </Box>
              <Box sx={{ display: "flex", m: "auto", justifyContent: "center", my: 5 }}>
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  text={"Submit"}
                  name={"Confirmar"}
                  className={"button-basic-registration"}
                />
              </Box>
            </Form>
          </Paper>
        )}
      </Formik>
    </>
  );
};

export default ConfirmSession;
