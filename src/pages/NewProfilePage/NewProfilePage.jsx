import React from "react";
import { useParams } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import MainSection from "../../components/PhotographerProfile/MainSection/MainSection";
import useFetch from "../../hooks/useFetch";
import { useUser } from "../../contexts/UserContext";
import CoverPhoto from "../../components/PhotographerProfile/CoverPhoto/CoverPhoto";
import PhotographerProfileCard from "../../components/PhotographerProfile/PhotographerProfileCard/PhotographerProfileCard";
import UserProfileCard from "../../components/PhotographerProfile/UserProfileCard/UserProfileCard";
import { Container } from "@mui/system";
import "./NewProfilePage.css";
import ProfileDetailCard from "../../components/Cards/ProfileDetailCard/ProfileDetailCard";

const NewProfilePage = () => {
  const { user } = useUser();
  const params = useParams();
  const { id } = params;
  const { REACT_APP_API_ENDPOINT } = process.env;
  const UserUrl = `${REACT_APP_API_ENDPOINT}/users/${id}`;
  const { data, loading, error } = useFetch(UserUrl);

  if (data?.name) {
    console.log("DATAENPROF", data);
    return (
      <>
        <Box>
          <CoverPhoto coverPhoto={data.coverPhoto} />
        </Box>

        <Grid container spacing={1} className="profile-container" sx={{ justifyContent: "center" }}>
          <Grid
            item
            xs={12}
            md={3}
            sx={{ display: "flex", justifyContent: "center", alignItems: "flex-start" }}
          >
            <ProfileDetailCard userData={data} role={data.role} />
          </Grid>

          <Grid item className="main-section-container" sx={{}} xs={12} md={8}>
            <MainSection id={id} role={data.role} />
          </Grid>
        </Grid>
      </>
    );
  }
};

export default NewProfilePage;
