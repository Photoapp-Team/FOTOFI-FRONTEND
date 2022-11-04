import * as React from "react";
import "./ImagesContainer.css";
import ImageCard from "../../Cards/ImageCard/ImageCard";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import Skeleton from "@mui/material/Skeleton";
import Button from "../../Inputs/Button/Button";
import useWindowDimensions from "../../../services/useResize";
import { sendSelectedImages } from "../../../services/sendSelectedImages";
import { updateSession } from "../../../services/updateSession";
import { useParams } from "react-router-dom";

export default function ImageContainer({ previewPics, loaded, setStatusWorkspace }) {
  const params = useParams();
  const { id } = params;
  const selectedImages = [];
  const { width } = useWindowDimensions();
  const calculateCol = (width) => {
    if (width > 1280) {
      return 4;
    }
    let integerCol = Math.floor(width / 320);
    return integerCol;
  };

  const handleSubmit = async () => {
    const selected = await sendSelectedImages(selectedImages, id, previewPics);
    if (selected) {
      const newValue = {
        status: {
          selected: Date.now(),
        },
      };
      const updatedSession = await updateSession(id, newValue);
      setStatusWorkspace(updatedSession);
    }
  };

  if (loaded) {
    return (
      <>
        <Container maxWidth="lg">
          <Box sx={{ mb: 0, mx: "auto" }}>
            <h4>Por favor selecciona las imágenes que quieres que se editen</h4>
          </Box>
          <Box sx={{ height: 700, overflowY: "scroll" }}>
            <ImageList variant="masonry" cols={calculateCol(width)} gap={8}>
              {previewPics.map((image) => (
                <ImageCard
                  key={image.name}
                  image={image}
                  selectedImages={selectedImages}
                  onSubmit={handleSubmit}
                />
              ))}
            </ImageList>
          </Box>
          <Button
            type="submit"
            text={"Submit"}
            name={"Enviar"}
            className={"button-basic-registration"}
            onClick={handleSubmit}
          />
        </Container>
      </>
    );
  }

  return (
    <>
      <Container maxWidth="lg">
        <Box>
          <h4 sx={{ mb: 0, mx: "auto" }}>
            Por favor selecciona las imágenes que quieres que se editen
          </h4>
        </Box>
        <Box sx={{ height: 700, overflowY: "scroll" }}>
          <ImageList variant="masonry" cols={4} gap={8}>
            <Skeleton variant="rectangular" width={210} height={500} />
            <Skeleton variant="rectangular" width={210} height={500} />
            <Skeleton variant="rectangular" width={210} height={500} />
            <Skeleton variant="rectangular" width={210} height={500} />
          </ImageList>
        </Box>
      </Container>
    </>
  );
}
