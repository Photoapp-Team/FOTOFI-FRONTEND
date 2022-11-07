import * as React from "react";
import "./ProfileDetailCard.css";
import { Paper } from "@mui/material";
import IdentityCard from "../IdentityCard/IdentityCard";
import ConctactCard from "../ContactCard/ContactCard";
import SpecialityCard from "../SpecialityCard/SpecialityCardCard";

export default function ProfileDetailCard({ userData, role }) {
  let haveTags = null;
  if (userData?.photoTags?.length > 0) {
    haveTags = true;
  } else {
    haveTags = false;
  }

  if (userData?.name) {
    return (
      <Paper sx={{ width: 320 }} elevation={7}>
        <IdentityCard userData={userData} role={role} />
        {userData.role === "Photographer" ? <ConctactCard userData={userData} /> : <></>}
        {userData.role === "Photographer" && haveTags ? (
          <SpecialityCard userData={userData} />
        ) : (
          <></>
        )}
      </Paper>
    );
  }
}
