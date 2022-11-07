import * as React from "react";
import "./IdentityCard.css";
import { Card, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { display } from "@mui/system";
import Button from "../../Inputs/Button/Button";
import { useUser } from "../../../contexts/UserContext";
import { Navigate, useNavigate } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

export default function IdentityCard({ userData }) {
  const navigate = useNavigate();
  const { name, lastname, role, profilePic, premium, _id } = userData;
  const { user } = useUser();
  console.log(userData);
  if (userData?.name) {
    return (
      <>
        <Card
          className="identitycard"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Avatar
            className="user-avatar"
            alt="USER PROFILE PIC"
            src={profilePic}
            sx={{ width: 70, height: 70, m: 2 }}
          />
          <Typography children={`${name} ${lastname}`} variant="h5" sx={{ p: 1 }} />
          <Typography children={role} sx={{ p: 1 }} />
          {_id === user?._id ? (
            <>
              <Button
                name={"Editar Perfil"}
                className={"buttonLogin"}
                onClick={() => {
                  navigate(`/editprofile/${_id}`);
                }}
              >
                Editar mi perfil
              </Button>
              {userData.premium.isPremium === false && userData.role === "Photographer" ? (
                <Button
                  name={"Volverse PRO"}
                  className={"button-profile-1"}
                  onClick={() => {
                    navigate(`/Payment/${userData._id}`);
                  }}
                />
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}
        </Card>
      </>
    );
  } else {
    <>
      <Card
        className="identitycard"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Skeleton variant="circular" width={70} height={70} margin={2} />

        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      </Card>
    </>;
  }
}
