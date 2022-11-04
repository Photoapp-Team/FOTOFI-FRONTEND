import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import usePackage from "../../../hooks/usePackage";
import AddServiceCard from "../../Cards/AddServiceCard";
import PackageCard from "../../Cards/PackageCard/PackageCard";
import { useNavigate, useParams } from "react-router-dom";

const ServicesContainer = ({ isOwner }) => {
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");
  const { data } = usePackage(id);

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", m: "auto" }}>
      {data &&
        data.map((pack, index) => {
          return (
            <PackageCard
              key={index}
              img={pack.coverPhoto}
              withFooter={false}
              service={pack.serviceCategory}
              isLoaded={true}
              type="package"
              packageId={pack._id}
              isOwner={isOwner}
            />
          );
        })}
      {isOwner ? <AddServiceCard /> : <></>}
    </Box>
  );
};

export default ServicesContainer;
