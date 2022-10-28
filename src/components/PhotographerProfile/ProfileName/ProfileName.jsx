import React from "react";
import "./ProfileName.css";

const ProfileName = ({ name, lastname }) => {
  return (
    <div className="profile-user-text">
      {name} {lastname}
    </div>
  );
};

export default ProfileName;
