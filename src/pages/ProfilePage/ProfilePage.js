import React from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import MainSection from "../../components/PhotographerProfile/MainSection/MainSection";
import useFetch from "../../hooks/useFetch";
import { useUser } from "../../contexts/UserContext";
import CoverPhoto from "../../components/PhotographerProfile/CoverPhoto/CoverPhoto";
import PhotographerProfileCard from "../../components/PhotographerProfile/PhotographerProfileCard/PhotographerProfileCard";
import UserProfileCard from "../../components/PhotographerProfile/UserProfileCard/UserProfileCard";

const ProfilePage = () => {
  const { user } = useUser();
  const params = useParams();
  const { id } = params;
  const { REACT_APP_API_ENDPOINT } = process.env;
  const UserUrl = `${REACT_APP_API_ENDPOINT}/users/${id}`;
  const { data, loading, error } = useFetch(UserUrl);
  if (data) {
    const { coverPhoto } = data;
    if (data.role === "Photographer") {
      return (
        <>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Box>
              <CoverPhoto coverPhoto={coverPhoto} />
            </Box>
            <PhotographerProfileCard id={id} data={data} />
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                mt: 35,
                maxWidth: "63vw",
                width: "auto",
                position: "relative",
              }}
            >
              <MainSection id={id} role={data.role} />
            </Box>
          </Box>
        </>
      );
    } else if (data.role === "User") {
      return (
        <>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Box>
              <CoverPhoto coverPhoto={coverPhoto} />
            </Box>
            <UserProfileCard id={id} data={data} />
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                mt: 35,
                maxWidth: "63vw",
                width: "auto",
                position: "relative",
              }}
            >
              <MainSection id={id} role={data.role} />
            </Box>
          </Box>
        </>
      );
    }
  }
};

export default ProfilePage;
