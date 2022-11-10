import * as React from "react";
import "./GalleryContainer.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import DisplayCard from "../../Cards/DisplayCard/DisplayCard";
import useWindowDimensions from "../../../services/useResize";
import ImageUpload from "../../../services/ImageUpload";
import { Formik, Form } from "formik";
import { uploadSessionPhotos } from "../../../services/uploadSessionPhotos";
import Button from "../../Inputs/Button/Button";
export default function GalleryContainer({ userData, isOwner }) {
  const { displayPics, _id } = userData;
  const { width } = useWindowDimensions();
  const calculateCol = (width) => {
    if (width > 1280) {
      return 4;
    }
    let integerCol = Math.floor(width / 320);
    return integerCol;
  };

  const onSubmit = async (values) => {
    const { REACT_APP_API_ENDPOINT } = process.env;
    const galleryUrl = `${REACT_APP_API_ENDPOINT}/upload/displayPics/${_id}`;
    const updatedSessionPhotos = await uploadSessionPhotos(galleryUrl, values);
  };
  return (
    <>
      <Container maxWidth="lg">
        {isOwner && (
          <Formik
            initialValues={{ previewPics: "" }}
            // validationSchema={addServiceSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting, setFieldValue, values }) => (
              <Form className="formContainer">
                <ImageUpload
                  phrase={"Arrastra tus fotos para agregar a la galeria aqui o haz click"}
                  classbox={"box-gallery"}
                  classpaper={"paper-gallery"}
                  setFieldValue={setFieldValue}
                  name={"displayPics"}
                  fieldName={"displayPics"}
                />
                <Button
                  sx={{ mb: 25 }}
                  disabled={isSubmitting}
                  type="submit"
                  text={"Submit"}
                  className={"button-basic-registration"}
                  name={"Subir Fotos"}
                />
              </Form>
            )}
          </Formik>
        )}

        {displayPics.length > 0 && (
          <Box sx={{ height: 700, overflowY: "scroll" }}>
            <ImageList variant="masonry" cols={calculateCol(width)} gap={8}>
              {displayPics.map((image) => (
                <DisplayCard key={image} image={image} />
              ))}
            </ImageList>
          </Box>
        )}
      </Container>
    </>
  );
}
