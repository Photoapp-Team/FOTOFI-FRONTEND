import { Box, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../Inputs/Button/Button";
import ProfileName from "../ProfileName/ProfileName";
import ProfilePhoto from "../ProfilePhoto";
import RoleText from "../Role/RoleText";
import "../PhotographerProfileCard/PhotographerProfileCard.css";

const UserProfileCard = ({ data }) => {
  const [isOwner, setIsOwner] = useState(false);
  const params = useParams();
  const { id } = params;
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/Payment/${id}`);
  };

  useEffect(() => {
    if (userId === id) setIsOwner(true);
    else setIsOwner(false);
  }, []);

  if (data) {
    const {
      profilePic,
      name,
      lastname,
      role,
      location,
      phoneNumber,
      email,
      photoTags,
      _id,
      premium,
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
              height: "auto",
            },
          }}
        >
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
            >
              <div>
                <ProfilePhoto photoclass={"profilepic"} profilePic={profilePic} />
              </div>
              <>
                <ProfileName name={name} lastname={lastname} />
              </>
              <>
                <RoleText role={role} />
              </>
              <>
                <Button
                  name={"Editar perfil"}
                  className={"button-profile-2"}
                  onClick={() => {
                    navigate(`/EditProfile/${id}`);
                  }}
                />
              </>
            </Box>
          </Paper>
        </Box>
      </>
    );
  }
};

export default UserProfileCard;
