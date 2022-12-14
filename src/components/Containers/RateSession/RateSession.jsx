import React, { useState } from "react";
import CustomInput from "../../Inputs/CustomInput";
import { rateSession } from "../../../services/FetchServices/rateSession";
import { Box, Button, Divider } from "@mui/material";
import RatingInput from "../../Inputs/Rating/RatingInput";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Formik } from "formik";
import { saveAs } from "file-saver";
import JSZip, { file } from "jszip";

const RateSession = ({ data, setStatusWorkspace }) => {
  const [downloaded, setDownloaded] = useState(false);
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
    setDownloaded(true);
  };

  const onSubmit = async (values) => {
    const sessionRated = await rateSession(values, id);
    if (sessionRated) {
      navigate("/MainPage");
    }
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
                width: "30%",
                height: "auto",
                alignItems: "center",
                background: "white",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                borderRadius: "10px",
              }}
            >
              {!downloaded ? (
                <>
                  <Box
                    sx={{
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      borderRadius: "10%",
                    }}
                  >
                    <Box>
                      <h4>??Tus fotos est??n Listas!</h4>
                      <h4>??S??lo da click en el bot??n de descargar!</h4>
                    </Box>
                    <Box sx={{ m: "auto", display: "flex", justifyContent: "center" }}>
                      <Button
                        className="buttonLogin"
                        text="Download"
                        name="Descargar Fotos"
                        variant="secondary"
                        children="Descargar Fotos"
                        sx={{ width: "200px", mb: "1rem" }}
                        onClick={() => {
                          onClick();
                        }}
                      />
                    </Box>
                  </Box>
                </>
              ) : (
                <>
                  <Box>
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
                      {" "}
                      <Box
                        sx={{
                          textAlign: "center",
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                          lineHeight: 0.5,
                        }}
                      >
                        <h5>
                          ??Ayudanos con tus comentarios, tu opini??n es muy importante para nosotros!
                        </h5>
                      </Box>
                      <CustomInput
                        label="Comentarios"
                        name="comments"
                        type="text"
                        placeholder="Por favor danos tu rese??a de la sesion.."
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
                        sx={{ p: 2, width: "200px", mb: "2rem" }}
                        disabled={isSubmitting}
                        type="submit"
                        text="Submit"
                        variant="secondary"
                        className="button-basic-registration"
                        name="Enviar Calificacion"
                        children="Enviar Calificacion"
                      />
                    </Box>
                  </Box>
                </>
              )}
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RateSession;
