import React from "react";
import CustomInput from "../../Inputs/CustomInput";
import { rateSession } from "../../../services/FetchServices/rateSession";
import { Box } from "@mui/material";
import RatingInput from "../../Inputs/Rating/RatingInput";
import Button from "../../Inputs/Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Formik } from "formik";
import { saveAs } from "file-saver";
import JSZip from "jszip";
import FileSaver from "file-saver";

const RateSession = ({ data }) => {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  const zip = new JSZip();

  const onClick = async () => {
    console.log({ data });
    // const img = zip.folder("images");
    // data.finalPics.map((file) => {
    //   img.file(`${file.name}`, file, { base64: true });
    //   zip.generateAsync({ type: "blob" }).then(function (file) {
    //     saveAs(file, "example.zip");
    //   });
    //   return;
    // });

    // FileSaver.saveAs("https://httpbin.org/image", "image.jpg");
  };

  const onSubmit = async (values) => {
    rateSession(values, id);
    navigate("/");
  };

  return (
    <>
      <Button
        onClick={() => {
          onClick();
        }}
      />
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
