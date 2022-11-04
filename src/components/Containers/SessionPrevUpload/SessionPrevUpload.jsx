import React from "react";
import Typography from "@mui/material/Typography";
import { Form, Formik } from "formik";
import { uploadSessionPhotos } from "../../../services/uploadSessionPhotos";
import { useNavigate, useParams } from "react-router-dom";
import ImageUpload from "../../../services/ImageUpload";
import Button from "../../Inputs/Button/Button";
import { Backdrop, Box, Fade, Modal } from "@mui/material";
import { useState } from "react";
import { updateSession } from "../../../services/updateSession";

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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onClick = () => {
    setStatusWorkspace("updatedSession");
  };

  const onSubmit = async (values) => {
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
  };

  return (
    <Formik
      initialValues={{ previewPics: "" }}
      // validationSchema={addServiceSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, setFieldValue, values }) => (
        <Form className="formContainer">
          <Box
            sx={{ my: "14vh", mx: "auto", width: "80%", minHeight: "30vh", alignItems: "center" }}
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
                onClick={handleOpen}
                sx={{ mb: 25 }}
                disabled={isSubmitting}
                type="submit"
                text={"Submit"}
                className={"button-basic-registration"}
                name={"Subir Fotos"}
              />
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                      Success
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                      Tus fotos se subieron con éxito
                    </Typography>
                    <Button
                      onClick={onClick}
                      sx={{ mb: 25 }}
                      disabled={isSubmitting}
                      text={"Aceptar"}
                      className={"button-basic-registration"}
                      name={"Aceptar"}
                    />
                  </Box>
                </Fade>
              </Modal>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default SessionPrevUpload;
