import { Box } from "@mui/material";
import React from "react";
import Button from "../../Button/Button";
import "./ServiceBlock.css";

const ServiceBlock = ({ photoTags }) => {
  return (
    <div className="profile-service-block">
      <div className="profile-service-text">Especializado en</div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          width: "100%",
          height: 188,
        }}
        className="profile-service-buttons"
      >
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
      </Box>
    </div>
  );
};

export default ServiceBlock;
