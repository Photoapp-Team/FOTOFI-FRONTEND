import { Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import ImageUpload from "../../../services/ImageUpload";
import Button from "../../Inputs/Button/Button";
import CustomBreadcrumbs from "../../Inputs/CustomBreadcrumbs";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Formik } from "formik";
import { uploadSessionPhotos } from "../../../services/uploadSessionPhotos";
import SessionInfoContainer from "../SessionInfoContainer/SessionInfoContainer";
import "./SessionGallery.css";

const SessionGallery = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  const onSubmit = async (values) => {
    const { REACT_APP_API_ENDPOINT } = process.env;
    const sessionUrl = `${REACT_APP_API_ENDPOINT}/upload/sessions/prev/${id}`;

    uploadSessionPhotos(sessionUrl, values);
    // navigate(`/Profile/${id}`);
  };

  return (
    <Box className="sessionGallery">
      <Box>
        <SessionInfoContainer />
      </Box>
      <Formik
        initialValues={{ previewPics: "" }}
        // validationSchema={addServiceSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form className="formContainer">
            <Box
              sx={{ my: "17vh", mx: "auto", width: "80%", minHeight: "30vh", alignItems: "center" }}
            >
              <ImageUpload
                phrase={"Arrastra tus fotos de preview aqui o haz click"}
                classbox={"boxSession"}
                classpaper={"paperSession"}
                setFieldValue={setFieldValue}
                name={"previewPics"}
                fieldName={"previewPics"}
              />
              <Box
                sx={{ mx: "auto", display: "flex", justifyContent: "center", position: "relative" }}
              >
                <Button
                  sx={{ mb: 25 }}
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
  );
};

export default SessionGallery;
