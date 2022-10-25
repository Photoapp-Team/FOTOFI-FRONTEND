import React from "react";
import ProfileCard from "../../components/PhotographerProfile/ProfileCard";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const params = useParams();
  const { photographerId } = params;
  return (
    <>
      <ProfileCard id={photographerId} />
    </>
  );
};

export default ProfilePage;
