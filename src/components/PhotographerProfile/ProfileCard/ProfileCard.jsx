import { Box, Paper } from "@mui/material";
import React from "react";
import useFetch from "../../../hooks/useFetch";
import "./ProfileCard.css";
import ProfilePhoto from "../ProfilePhoto";
import ProfileName from "../ProfileName/ProfileName";
import RoleText from "../Role/RoleText";
import Button from "../../Button/Button";
import Address from "../Address/Address";
import ServiceBlock from "../ServiceBlock/ServiceBlock";
import CoverPhoto from "../CoverPhoto/CoverPhoto";
import MainSection from "../MainSection/MainSection";

const ProfileCard = () => {
  const { REACT_APP_API_ENDPOINT } = process.env;
  const userId = "";
  const UserUrl = `${REACT_APP_API_ENDPOINT}/users/`;
  const { data, loading, error } = useFetch(UserUrl);
  if (data) {
    const {
      profilePic,
      name,
      lastname,
      role,
      location,
      phoneNumber,
      email,
      coverPhoto,
      photoTags,
    } = data;
    return (
      <>
        <></>
        <div className="profile">
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 396,
                height: 1037,
              },
            }}
            className="profile-box"
          >
            <CoverPhoto coverPhoto={coverPhoto} />
            <Paper elevation={3} className="profile-paper-container-main">
              <div className="profile-paper-container">
                <div>
                  <ProfilePhoto profilePic={profilePic} />
                </div>
                <>
                  <ProfileName name={name} lastname={lastname} />
                </>
                <>
                  <RoleText role={role} />
                </>
                <>
                  <Button
                    name={"Mis sesiones"}
                    className={"button-profile-1"}
                  />
                </>
                <>
                  <Button
                    name={"Editar perfil"}
                    className={"button-profile-2"}
                  />
                </>
                <>
                  <Address
                    location={location}
                    phoneNumber={phoneNumber}
                    email={email}
                  />
                </>
                <>
                  <ServiceBlock photoTags={photoTags} />
                </>
              </div>
            </Paper>
            <MainSection />
          </Box>
        </div>
      </>
    );
  } else return <div>Loading...</div>;
};

export default ProfileCard;
