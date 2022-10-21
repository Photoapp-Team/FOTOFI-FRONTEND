import React from "react";
import Button from "../../Button/Button";
import "./ServiceBlock.css";

const ServiceBlock = ({ photoTags }) => {
  return (
    <div className="profile-service-block">
      <div className="profile-service-text">Especializado en</div>
      <div className="profile-service-buttons">
        {photoTags &&
          photoTags.map((photoTag, index) => {
            return (
              <>
                <Button
                  key={index}
                  name={photoTag}
                  className={"button-service-block"}
                />
              </>
            );
          })}
      </div>
    </div>
  );
};

export default ServiceBlock;
