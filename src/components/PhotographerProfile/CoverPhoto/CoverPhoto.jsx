import React from "react";
import "./CoverPhoto.css";

const CoverPhoto = ({ coverPhoto }) => {
  return (
    <div className="profile-coverphoto-container">
      <img src={coverPhoto} />
    </div>
  );
};

export default CoverPhoto;
