import React from "react";
import "./PackageContainer.css";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import useFetchPackage from "../../../services/FetchServices/useFetchPackage";
import PackageGalleryCard from "../../Cards/PackageGalleryCard/PackageGalleryCard";
import PackageInfoCard from "../../Cards/PackageInfoCard";
import { useParams } from "react-router-dom";
import useFetchUser from "../../../services/useFetchUser";

export default function PackageContainer({ data }) {
  const packageData = data.data;
  const fetchSuccess = !data.loading;
  const { REACT_APP_API_ENDPOINT } = process.env
  const URL = `${REACT_APP_API_ENDPOINT}/users/${packageData.photographerId}`
  const userData = useFetchUser(URL)
  console.log(userData)
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
