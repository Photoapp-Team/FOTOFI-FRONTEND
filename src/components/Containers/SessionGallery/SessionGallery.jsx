import { Box } from "@mui/material";
import React from "react";
import ImageUpload from "../../../services/ImageUpload";
import CustomBreadcrumbs from "../../Inputs/CustomBreadcrumbs";

const SessionGallery = () => {
  return (
    <>
      <Box>
        <CustomBreadcrumbs />
      </Box>
      <Box sx={{ my: "30vh", mx: "auto", width: "80%", minHeight: "30vh" }}>
        <ImageUpload
          phrase={"Arrastra tus fotos de preview aqui o haz click"}
          classbox={"boxSession"}
          classpaper={"paperSession"}
        />
      </Box>
    </>
  );
};

export default SessionGallery;
