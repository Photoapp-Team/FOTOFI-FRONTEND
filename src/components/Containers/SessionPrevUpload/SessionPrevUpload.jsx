import React from "react";
import Typography from "@mui/material/Typography";
import { Form, Formik } from "formik";
import { uploadSessionPhotos } from "../../../services/uploadSessionPhotos";
import { useNavigate, useParams } from "react-router-dom";
import ImageUpload from "../../../services/ImageUpload";
import { Box, Button, CircularProgress } from "@mui/material";
import { useState } from "react";
import { updateSession } from "../../../services/updateSession";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./SessionPrevUpload.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const SessionPrevUpload = ({ setStatusWorkspace, sessionId }) => {
  const params = useParams();
  const { id } = params;
  const MySwal = withReactContent(Swal);

  const onSubmit = async (values) => {
    const { previewPics } = values;
    if (previewPics.length > 0) {
      const { REACT_APP_API_ENDPOINT } = process.env;
      const sessionUrl = `${REACT_APP_API_ENDPOINT}/upload/sessions/prev/${id}`;
      const updatedSessionPhotos = await uploadSessionPhotos(sessionUrl, values);
      if (updatedSessionPhotos) {
        const newValues = {
          status: {
            preUploaded: Date.now(),
          },
        };
        const updatedSession = await updateSession(sessionId, newValues);
        setStatusWorkspace(updatedSession);
      }
    } else {
      MySwal.fire({
        title: <strong>¡Espera!</strong>,
        text: "Antes de continuar por favor sube las imágenes que tomaste para que el usuario las revise.",
        icon: `error`,
      });
    }
  };

  return (
    <Formik initialValues={{ previewPics: "" }} onSubmit={onSubmit}>
      {({ isSubmitting, setFieldValue, values }) => (
        <Form>
          <Box
            sx={{
              my: "14vh",
              mx: "auto",
              width: "80%",
              minHeight: "30vh",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              textAlign: "initial",
              gap: 1,
            }}
          >
            <Box sx={{ justifyContent: "flex-start", display: "flex", width: "100%", pl: "3rem" }}>
              <Typography
                children="*Sube tus imagenes en baja resolución y con marca de agua"
                sx={{ fontSize: "14px", fontWeight: 500 }}
              />
            </Box>
            <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
              <ImageUpload
                phrase={"Arrastra tus fotos de preview aqui o haz click"}
                classbox={"boxSession"}
                classpaper={"paperSession"}
                setFieldValue={setFieldValue}
                name={"previewPics"}
                fieldName={"previewPics"}
              />
            </Box>
            <Box>
              <Box>{isSubmitting && <CircularProgress />}</Box>
              <Box>
                <Button
                  onClick={() => {
                    onSubmit(values);
                  }}
                  disabled={isSubmitting}
                  type="submit"
                  text="Submit"
                  variant="secondary"
                  children="Subir Fotos"
                  name="Subir Fotos"
                  sx={{ mt: 4 }}
                  className="prev-button-session-upload"
                />
              </Box>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default SessionPrevUpload;
