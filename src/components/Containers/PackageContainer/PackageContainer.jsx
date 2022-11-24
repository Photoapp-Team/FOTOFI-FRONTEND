import React from "react";
import "./PackageContainer.css";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import useFetchPackage from "../../../services/FetchServices/useFetchPackage";
import PackageGalleryCard from "../../Cards/PackageGalleryCard/PackageGalleryCard";
import PackageInfoCard from "../../Cards/PackageInfoCard";

export default function PackageContainer({ data }) {
  const packageData = data.data;
  const fetchSuccess = !data.loading;
  return (
    <Container maxWidth="md" sx={{ minHeight: "calc(100vh - 199px)", display: "flex" }}>
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          my: "auto",
          height: "auto",
        }}
      >
        <Grid item xs={12} md={7} sx={{ my: "auto" }}>
          {fetchSuccess ? (
            <PackageGalleryCard
              isLoaded={fetchSuccess}
              name="Luis"
              photos={packageData.displayPhotos}
            />
          ) : (
            <PackageGalleryCard isLoaded={fetchSuccess} sx={1} />
          )}
        </Grid>
        <Grid item xs={12} md={5}>
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
