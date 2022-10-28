import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import usePackage from "../../../hooks/usePackage";
import AddServiceCard from "../../Cards/AddServiceCard";
import ServiceCard from "../../Cards/ServiceCard/ServiceCard";
import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "../../../contexts/UserContext";

const ServicesContainer = ({ isOwner }) => {
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");
  const { data } = usePackage(id);

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {data &&
        data.map((pack, index) => {
          return (
            <ServiceCard
              key={index}
              img={pack.coverPhoto}
              withFooter={false}
              service={pack.serviceCategory}
              isLoaded={true}
              type="package"
              packageId={pack._id}
            />
          );
        })}
      {isOwner ? <AddServiceCard /> : <></>}
    </Box>
  );
};

export default ServicesContainer;
