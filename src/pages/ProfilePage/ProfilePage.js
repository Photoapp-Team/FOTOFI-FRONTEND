import React from "react";
import ProfileCard from "../../components/PhotographerProfile/ProfileCard";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import MainSection from "../../components/PhotographerProfile/MainSection/MainSection";
import useFetch from "../../hooks/useFetch";
import { useUser } from "../../contexts/UserContext";

const ProfilePage = () => {
  const { user } = useUser();
  const params = useParams();
  const { id } = params;
  const { REACT_APP_API_ENDPOINT } = process.env;
  const userId = "";
  const UserUrl = `${REACT_APP_API_ENDPOINT}/users/${id}`;
  const { data, loading, error } = useFetch(UserUrl);
  if (data)
    return (
      <>
        <Box sx={{ display: "flex" }} className="profile">
          <ProfileCard id={id} data={data} />
          <Box sx={{ display: "flex", flexWrap: "wrap", mt: 35 }}>
            <MainSection id={id} />
          </Box>
        </Box>
      </>
    );
};

export default ProfilePage;
