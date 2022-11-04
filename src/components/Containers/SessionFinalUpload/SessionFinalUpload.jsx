import { autocompleteClasses, Box, Divider, Paper } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InsertDriveFileSharpIcon from "@mui/icons-material/InsertDriveFileSharp";
import ImageUpload from "../../../services/ImageUpload";
import { Form, Formik } from "formik";
import { uploadSessionPhotos } from "../../../services/uploadSessionPhotos";
import Button from "../../Inputs/Button/Button";
import "./SessionFinalUpload.css";

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

const SessionFinalUpload = ({ selectedPics, id, setStatusWorkspace }) => {
  const onSubmit = async (values) => {
    const { REACT_APP_API_ENDPOINT } = process.env;
    const sessionUrl = `${REACT_APP_API_ENDPOINT}/upload/sessions/final/${id}`;
    const newValues = {
      status: {
        delivered: Date.now(),
      },
    };
    uploadSessionPhotos(sessionUrl, newValues);
    setStatusWorkspace("s");
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

        <Formik
          initialValues={{ previewPics: "" }}
          // validationSchema={addServiceSchema}
          onSubmit={onSubmit}
        >
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
                }}
              >
                <Box sx={{ mb: 0, ml: "2px" }}>
                  <h4 className="sessionFinalUploadText">
                    Sube las fotos editadas en alta resolución
                  </h4>
                </Box>
                <ImageUpload
                  phrase={"Arrastra tus fotos finales aqui o haz click"}
                  classbox={"boxSessionFinal"}
                  classpaper={"paperSessionFinal"}
                  setFieldValue={setFieldValue}
                  name={"finalPics"}
                  fieldName={"finalPics"}
                />
                <Box sx={{ display: "flex" }}>
                  <Button
                    sx={{ mb: 25, mx: "auto" }}
                    disabled={isSubmitting}
                    type="submit"
                    text={"Submit"}
                    className={"button-basic-registration"}
                    name={"Subir Fotos"}
                  />
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
