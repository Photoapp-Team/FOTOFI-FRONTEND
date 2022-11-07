import * as React from "react";
import "./IdentityCard.css";
import { Card, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { display } from "@mui/system";
import Button from "../../Inputs/Button/Button";
import { useUser } from "../../../contexts/UserContext";

export default function IdentityCard({ userData }) {
  const { name, lastname, role, profilePic, premium, _id } = userData;
  const { user } = useUser();
  console.log(user);
  if (user?.name) {
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
          {_id === user._id ? (
            <Button name={"Editar Perfil"} className={"buttonLogin"}>
              Editar mi perfil
            </Button>
          ) : (
            <></>
          )}
          {role === "Photographer" && _id !== user._id && premium.isPremium ? (
            <Button name={"Contactar"} className={"buttonLogin"}>
              Contactar
            </Button>
          ) : (
            <></>
          )}
        </Card>
      </>
    );
  }
}
