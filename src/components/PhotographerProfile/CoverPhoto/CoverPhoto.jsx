import React from "react";
import "./CoverPhoto.css";

const CoverPhoto = (props) => {
  return (
    <div className="profile-coverphoto-container">
      <img src={props.coverPhoto} />
    </div>
  );
};

export default CoverPhoto;
