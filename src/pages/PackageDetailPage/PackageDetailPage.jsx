import "./PackageDetailPage.css";
import PackageInfoCard from "../../components/Cards/PackageInfoCard";
import { useParams } from "react-router-dom";
import { Grid, Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import PackageGalleryCard from "../../components/Cards/PackageGalleryCard/PackageGalleryCard";

const PackageDetailPage = () => {
  const params = useParams();

  const [packageData, setPackageData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetchSucess, setFetchSucess] = useState(false);
  const { REACT_APP_API_ENDPOINT } = process.env;
  const url = `${REACT_APP_API_ENDPOINT}/packages/${params.id}`;

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(url);
        if (response) {
          console.log(response.data.success);
        }
        setFetchSucess(response.data.success);
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
          {fetchSucess ? (
            <PackageGalleryCard
              isLoaded={fetchSucess}
              name="Luis"
              photos={packageData.displayPhotos}
              //!MANDAR INFO DESDE LA PAGINA ANTERIOR
              // profilePic=""
              // location=""
              // photographerId=""
            />
          ) : (
            <PackageGalleryCard isLoaded={fetchSucess} sx={1} />
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          {fetchSucess ? (
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
              serviceId={packageData._id}
              photographerId={packageData.photographerId}
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
