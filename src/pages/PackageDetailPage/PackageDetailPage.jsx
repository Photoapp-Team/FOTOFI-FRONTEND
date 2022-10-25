import "./PackageDetailPage.css";
import PackageInfoCard from "../../components/Cards/PackageInfoCard";
import { useParams } from "react-router-dom";
import { Grid, Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import PackageGalleryCard from "../../components/Cards/PackageGalleryCard/PackageGalleryCard";

const PackageDetailPage = () => {
  const params = useParams();

  const [packages, setPackages] = useState({});
  const [packageData, setPackageData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { REACT_APP_API_ENDPOINT } = process.env;
  const url = `${REACT_APP_API_ENDPOINT}/packages/${params.id}`;

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        console.log("haciendo fetch");
        const response = await axios.get(url);
        if (response) {
          console.log(response.data.data.package);
        }
        setPackageData(response.data.data.package);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return (
    <Container maxWidth="md">
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={8}>
          <PackageGalleryCard
            isLoaded={!loading}
            name="Luis"
            // profilePic=""
            // location=""
            // photographerId=""
            sx={1}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          {packageData?.description ? (
            <PackageInfoCard
              isLoaded={true}
              minPrice={packageData.minPrice}
              maxPrice={packageData.maxPrice}
              description={packageData.description}
              deliveryTime={packageData.deliveryTime}
              minQuantityPrevPhotos={packageData.minQuantityPrevPhotos}
              maxQuantityPrevPhotos={packageData.maxQuantityPrevPhotos}
              minQuantityFinalPhotos={packageData.minQuantityFinalPhotos}
              maxQuantityFinalPhotos={packageData.maxQuantityFinalPhotos}
            />
          ) : (
            <PackageInfoCard isLoaded={false} />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default PackageDetailPage;
