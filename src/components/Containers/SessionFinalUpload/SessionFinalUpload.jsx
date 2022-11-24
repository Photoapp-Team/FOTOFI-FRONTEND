import {
  autocompleteClasses,
  Box,
  Button,
  CircularProgress,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import InsertDriveFileSharpIcon from "@mui/icons-material/InsertDriveFileSharp";
import ImageUpload from "../../../services/ImageUpload";
import { Form, Formik } from "formik";
import { uploadSessionPhotos } from "../../../services/uploadSessionPhotos";
import "./SessionFinalUpload.css";
import { useParams } from "react-router-dom";
import { updateSession } from "../../../services/updateSession";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const thumb = {
  display: "flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  margin: "auto",
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const img = {
  display: "flex",
  width: "auto",
  height: "100%",
  objectFit: "cover",
  overflow: "hidden",
};

const SessionFinalUpload = ({ selectedPics, sessionId, setStatusWorkspace }) => {
  const params = useParams();
  const { id } = params;
  const MySwal = withReactContent(Swal);

  const onSubmit = async (values) => {
    const { finalPics } = values;
    if (finalPics?.length > 0) {
      const { REACT_APP_API_ENDPOINT } = process.env;
      const sessionUrl = `${REACT_APP_API_ENDPOINT}/upload/sessions/final/${id}`;
      const updatedSessionPhotos = await uploadSessionPhotos(sessionUrl, values);
      if (updatedSessionPhotos) {
        const newValues = {
          status: {
            delivered: Date.now(),
          },
        };
        const updatedSession = await updateSession(sessionId, newValues);
        setStatusWorkspace(updatedSession);
      }
    } else {
      MySwal.fire({
        title: <strong>¡Espera!</strong>,
        text: "Antes de continuar por favor sube las imágenes editadas para que el usuario las revise.",
        icon: `error`,
      });
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          ml: "50px",
          mt: "100px",
          gap: 10,
          alignItems: "center",
        }}
        elevation={3}
      >
        <Box>
          <Box sx={{ mb: 0 }}>
            <h4 className="sessionFinalUploadText">
              Fotos seleccionadas por el Cliente para ser editadas
            </h4>
          </Box>
          <Paper
            sx={{
              display: "block",
              width: "auto",
              height: "auto",
              bgcolor: "background.paper",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 3,
              padding: 4,
            }}
          >
            {selectedPics.map((selectedPic) => {
              return (
                <>
                  <Box style={thumb}>
                    <img src={selectedPic.link} style={img} />
                  </Box>
                  <Box sx={{ mx: "auto", textAlign: "center", alignItems: "baseline" }}>
                    <InsertDriveFileSharpIcon />
                    <span>{selectedPic.name.split("-").reverse()[0]}</span>
                  </Box>
                  <Divider sx={{ my: 2 }} variant="middle" />
                </>
              );
            })}
          </Paper>
        </Box>

        <Formik initialValues={{ previewPics: "" }} onSubmit={onSubmit}>
          {({ isSubmitting, setFieldValue, values }) => (
            <Form>
              <Box
                sx={{
                  my: "14vh",
                  mx: "auto",
                  width: "auto",
                  minWidth: "50vw",
                  minHeight: "30vh",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    mb: 0,
                    ml: "2px",
                    justifyContent: "flex-start",
                    width: "100%",
                    display: "flex",
                    pl: "3rem",
                  }}
                >
                  <Typography
                    children="*Sube las fotos editadas en alta resolución"
                    sx={{ fontSize: "14px", fontWeight: 500 }}
                  />
                </Box>
                <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                  <ImageUpload
                    phrase={"Arrastra tus fotos finales aqui o haz click"}
                    classbox={"boxSessionFinal"}
                    classpaper={"paperSessionFinal"}
                    setFieldValue={setFieldValue}
                    name={"finalPics"}
                    fieldName={"finalPics"}
                  />
                </Box>
                <Box>
                  <Box>{isSubmitting && <CircularProgress />}</Box>
                  <Box sx={{ display: "flex", mt: 4 }}>
                    <Button
                      onClick={() => {
                        onSubmit(values);
                      }}
                      sx={{ mb: 25, mx: "auto" }}
                      disabled={isSubmitting}
                      type="submit"
                      text="Submit"
                      variant="secondary"
                      children="Subir Fotos"
                      name={"Subir Fotos"}
                      className="upload-final-pics"
                    />
                  </Box>
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default SessionFinalUpload;
