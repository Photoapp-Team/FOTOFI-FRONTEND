import React from "react";
import "./PackageContainer.css";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import useFetchPackage from "../../../services/useFetchPackage";
import PackageGalleryCard from "../../Cards/PackageGalleryCard/PackageGalleryCard";
import PackageInfoCard from "../../Cards/PackageInfoCard";

export default function PackageContainer({ data }) {
  const packageData = data.data;
  const fetchSuccess = !data.loading;

  return (
    <Container maxWidth="md">
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={8}>
          {fetchSuccess ? (
            <PackageGalleryCard
              isLoaded={fetchSuccess}
              name="Luis"
              photos={packageData.displayPhotos}
              //!MANDAR INFO DESDE LA PAGINA ANTERIOR
              // profilePic=""
              // location=""
              // photographerId=""
            />
          ) : (
            <PackageGalleryCard isLoaded={fetchSuccess} sx={1} />
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          {fetchSuccess ? (
            <PackageInfoCard data={packageData} isLoaded={true} />
          ) : (
            <PackageInfoCard isLoaded={false} />
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
