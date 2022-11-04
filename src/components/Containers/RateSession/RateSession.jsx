import React from "react";
import CustomInput from "../../Inputs/CustomInput";
import { rateSession } from "../../../services/FetchServices/rateSession";
import { Box, Divider } from "@mui/material";
import RatingInput from "../../Inputs/Rating/RatingInput";
import Button from "../../Inputs/Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Formik } from "formik";
import { saveAs } from "file-saver";
import JSZip, { file } from "jszip";
import FileSaver from "file-saver";

const RateSession = ({ data }) => {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  let zip = new JSZip();

  const getFileType = (url) => {
    let fileExtention = /\.[0-9a-z]+$/i;
    let fileExtResult = fileExtention.exec(url);
    if (!fileExtResult) return "";
    return fileExtResult;
  };
  const onClick = async () => {

    let imgUrl = [];
    let imageBlob = [];

    data.finalPics.map((link) => {
      imgUrl.push(link.link);
    });

    imgUrl.forEach((url, index) => {
      imageBlob.push(
        fetch(url)
          .then((response) => response.blob())
          .then((file) => ({ url, file }))
      );
    });
    let finalZip = await Promise.all(imageBlob);
    finalZip.forEach(({ url, file }, index) => {
      const fileType = getFileType(url);
      let imageFile = new File([file], `Archivo${index}`, { fileType });
      zip.file(`${imageFile.name}.${fileType}`, imageFile, { base64: true });
    });
    zip.generateAsync({ type: "blob" }).then(function (blob) {
      saveAs(blob, "collection.zip");
    });
  };

  const onSubmit = async (values) => {
    rateSession(values, id);
    navigate("/");
  };

  return (
    <>
      <Formik
        initialValues={{}}
        // validationSchema={addServiceSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form className="formContainer">
            <Box
              sx={{
                my: "17vh",
                mx: "auto",
                width: "80%",
                minHeight: "30vh",
                alignItems: "center",
                background: "white",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  mx: "auto",
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box sx={{ textAlign: "center", display: "flex", alignItems: "center", mb: 10 }}>
                  <Box>
                    <h4>¡Tus fotos están Listas!</h4>
                    <h4>¡Sólo da click en el botón de descargar!</h4>
                    <Box sx={{ m: "auto", display: "flex", justifyContent: "center" }}>
                      <Button
                        className="buttonLogin"
                        text={"Download"}
                        name={"Descargar Fotos"}
                        onClick={() => {
                          onClick();
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ textAlign: "center", display: "flex", alignItems: "center" }}>
                  <Box>
                    <h4>¡Aydudanos con tus comentarios!</h4>
                    <h4>¡Tu opinión es muy importante para nosotros!</h4>
                  </Box>
                </Box>
                <CustomInput
                  label="Comentarios"
                  name="comments"
                  type="text"
                  placeholder="Por favor danos tu reseña de la sesion.."
                  size="large"
                  className="comments-input"
                />
                <RatingInput
                  label="Rating"
                  fieldName={"rating"}
                  name="rating"
                  setFieldValue={setFieldValue}
                ></RatingInput>
                <Button
                  sx={{ mb: 25, p: 2 }}
                  disabled={isSubmitting}
                  type="submit"
                  text={"Submit"}
                  className={"button-basic-registration"}
                  name={"Enviar Calificacion"}
                />
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RateSession;
