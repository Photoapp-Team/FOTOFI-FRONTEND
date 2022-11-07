import * as React from "react";
import "./ProfileDetailCard.css";
import { Paper } from "@mui/material";
import IdentityCard from "../IdentityCard/IdentityCard";
import ConctactCard from "../ContactCard/ContactCard";
import SpecialityCard from "../SpecialityCard/SpecialityCardCard";

export default function ProfileDetailCard({ userData, role, isOwner, isPhotographer, isPremium }) {
  let haveTags = null;
  if (userData?.photoTags?.length > 0) {
    haveTags = true;
  } else {
    haveTags = false;
  }

  if (isPhotographer) {
    return (
      <Paper className="profile-info-container" sx={{ width: 320, minHeight: 400 }} elevation={7}>
        <IdentityCard
          userData={userData}
          role={role}
          isPremium={isPremium}
          isOwner={isOwner}
          isPhotographer={true}
        />

        <ConctactCard userData={userData} />
        {haveTags ? <SpecialityCard userData={userData} /> : <></>}
      </Paper>
    );
  } else {
    return (
      <Paper className="profile-info-container" sx={{ width: 320, minHeight: 400 }} elevation={7}>
        <IdentityCard
          userData={userData}
          role={role}
          isPremium={false}
          isOwner={isOwner}
          isPhotographer={false}
        />
      </Paper>
    );
  }
}
