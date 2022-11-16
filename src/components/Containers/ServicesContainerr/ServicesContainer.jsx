import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import usePackage from "../../../hooks/usePackage";
import AddServiceCard from "../../Cards/AddServiceCard";
import PackageCard from "../../Cards/PackageCard/PackageCard";
import { useNavigate, useParams } from "react-router-dom";
import PackageOwnerCard from "../../Cards/PackageOwnerCard/PackageOwnerCard";

const ServicesContainer = ({ isOwner, role }) => {
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");
  const { data } = usePackage(id);

  if (isOwner && role === "Photographer") {
    return (
      <Box sx={{ display: "flex", flexWrap: "wrap", m: "auto" }}>
        {data &&
          data.map((pack, index) => {
            return (
              <PackageOwnerCard
                key={index}
                img={pack.coverPhoto}
                withFooter={false}
                service={pack.serviceCategory}
                isLoaded={true}
                packageId={pack._id}
                isOwner={isOwner}
              />
            );
          })}
        <AddServiceCard />
      </Box>
    );
  } else {
  }

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
    </Box>
  );
};

export default ServicesContainer;
