import { Box, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./ProfileCard.css";
import ProfilePhoto from "../ProfilePhoto";
import ProfileName from "../ProfileName/ProfileName";
import RoleText from "../Role/RoleText";
import Button from "../../Inputs/Button/Button";
import Address from "../Address/Address";
import ServiceBlock from "../ServiceBlock/ServiceBlock";
import { useNavigate, useNavigation, useParams } from "react-router-dom";


const ProfileCard = ({ data }) => {
  const [isOwner, setIsOwner] = useState(false);
  //const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/Payment/${id}`)
  }

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

    if (isOwner) {
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
                  {premium.isPremium === true ? (
                    <Button name={"Mis sesiones"} className={"button-profile-1"} />
                  ) : (
                    <Button name={"Volverse PRO"} className={"button-profile-1"} onClick={() => {
                      onClick()
                    }} />
                  )}
                </>
                <>
                  <Button name={"Editar perfil"} className={"button-profile-2"} onClick={() => { navigate(`/EditProfile/${id}`) }} />
                </>
                <>
                  {premium.isPremium === true ? (
                    <Address location={location} phoneNumber={phoneNumber} email={email} />
                  ) : (
                    <></>
                  )}
                </>
                <>
                  <ServiceBlock photoTags={photoTags} />
                </>
              </Box>
            </Paper>
          </Box>
        </>
      );
    } else {
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
                  {premium.isPremium === true ? (
                    <Button name={"Contactar"} className={"button-profile-1"} />
                  ) : (
                    <></>
                  )}
                </>
                <>
                  <Button name={"Guardar"} className={"button-profile-2"} />
                </>
                <>
                  {premium.isPremium === true ? (
                    <Address location={location} phoneNumber={phoneNumber} email={email} />
                  ) : (
                    <></>
                  )}
                </>
                <>
                  <ServiceBlock photoTags={photoTags} />
                </>
              </Box>
            </Paper>
          </Box>
        </>
      );
    }
  } else return <div>Loading...</div>;
};

export default ProfileCard;
import { Box, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./ProfileCard.css";
import ProfilePhoto from "../ProfilePhoto";
import ProfileName from "../ProfileName/ProfileName";
import RoleText from "../Role/RoleText";
import Button from "../../Inputs/Button/Button";
import Address from "../Address/Address";
import ServiceBlock from "../ServiceBlock/ServiceBlock";
import { useNavigate, useNavigation, useParams } from "react-router-dom";

const ProfileCard = ({ data }) => {
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

    if (isOwner) {
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
                  {premium.isPremium === true ? (
                    <Button name={"Mis sesiones"} className={"button-profile-1"} />
                  ) : (
                    <Button
                      name={"Volverse PRO"}
                      className={"button-profile-1"}
                      onClick={() => {
                        onClick();
                      }}
                    />
                  )}
                </>
                <>
                  <Button name={"Editar perfil"} className={"button-profile-2"} />
                </>
                <>
                  {premium.isPremium === true ? (
                    <Address location={location} phoneNumber={phoneNumber} email={email} />
                  ) : (
                    <></>
                  )}
                </>
                <>
                  <ServiceBlock photoTags={photoTags} />
                </>
              </Box>
            </Paper>
          </Box>
        </>
      );
    } else {
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
                  {premium.isPremium === true ? (
                    <Button name={"Contactar"} className={"button-profile-1"} />
                  ) : (
                    <></>
                  )}
                </>
                <>
                  <Button name={"Guardar"} className={"button-profile-2"} />
                </>
                <>
                  {premium.isPremium === true ? (
                    <Address location={location} phoneNumber={phoneNumber} email={email} />
                  ) : (
                    <></>
                  )}
                </>
                <>
                  <ServiceBlock photoTags={photoTags} />
                </>
              </Box>
            </Paper>
          </Box>
        </>
      );
    }
  } else return <div>Loading...</div>;
};

export default ProfileCard;

