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

const ProfileCard = ({ data }) => {
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
      _id,
    } = data;
    return (
      <>
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
        >
          <CoverPhoto coverPhoto={coverPhoto} />
          <Paper
            elevation={3}
            sx={{
              mt: 115,
              ml: 100,
              zIndex: 1,
            }}
            className="profile-paper-container-main"
          >
            <Box
              sx={{
                ml: 98,
                width: "69%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                ml: "auto",
                mr: "auto",
                zIndex: 1,
              }}
              className="profile-paper-container"
            >
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
                <Button name={"Mis sesiones"} className={"button-profile-1"} />
              </>
              <>
                <Button name={"Editar perfil"} className={"button-profile-2"} />
              </>
              <>
                <Address location={location} phoneNumber={phoneNumber} email={email} />
              </>
              <>
                <ServiceBlock photoTags={photoTags} />
              </>
            </Box>
          </Paper>
        </Box>
      </>
    );
  } else return <div>Loading...</div>;
};

export default ProfileCard;
