import React from "react";
import { useParams } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import MainSection from "../../components/PhotographerProfile/MainSection/MainSection";
import useFetch from "../../hooks/useFetch";
import { useUser } from "../../contexts/UserContext";
import CoverPhoto from "../../components/PhotographerProfile/CoverPhoto/CoverPhoto";
import { useEffect, useState } from "react";
import "./ProfilePage.css";
import ProfileDetailCard from "../../components/Cards/ProfileDetailCard/ProfileDetailCard";

const ProfilePage = () => {
  const params = useParams();
  const { id } = params;
  const { REACT_APP_API_ENDPOINT } = process.env;
  const UserUrl = `${REACT_APP_API_ENDPOINT}/users/${id}`;
  const { data, loading, error } = useFetch(UserUrl);
  const [isOwner, setIsOwner] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const [isPhotographer, setIsPhotographer] = useState(false);
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    if (userId === id) {
      setIsOwner(true);
    } else {
      setIsOwner(false);
    }
    if (data?.role === "Photographer") {
      setIsPhotographer(true);
    } else {
      setIsPhotographer(false);
    }
    if (data?.premium?.isPremium) {
      setIsPremium(true);
    } else {
      setIsPremium(false);
    }
  }, [userId, id, data]);

  if (data?.name) {
    return (
      <>
        <Box>
          <CoverPhoto coverPhoto={data.coverPhoto} />
        </Box>

        <Grid container spacing={1} className="profile-container" sx={{ justifyContent: "center" }}>
          <Grid
            item
            xs={12}
            md={4}
            sm={5}
            lg={3}
            sx={{ display: "flex", justifyContent: "center", alignItems: "flex-start" }}
          >
            <ProfileDetailCard
              userData={data}
              role={data.role}
              isOwner={isOwner}
              isPhotographer={isPhotographer}
              isPremium={isPremium}
            />
          </Grid>

          <Grid item className="main-section-container" sx={{}} xs={12} md={8}>
            <MainSection id={id} role={data.role} userData={data} />
          </Grid>
        </Grid>
      </>
    );
  }
};

export default ProfilePage;
