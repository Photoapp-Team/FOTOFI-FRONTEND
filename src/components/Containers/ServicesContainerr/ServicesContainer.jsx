import { Box } from "@mui/material";
import React, { useEffect } from "react";
import usePackage from "../../../hooks/usePackage";
import AddServiceCard from "../../Cards/AddServiceCard";
import ServiceCard from "../../Cards/ServiceCard/ServiceCard";
import { useNavigate } from "react-router-dom";

const ServicesContainer = ({ id }) => {
  const { data } = usePackage(id);
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex" }}>
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
      <AddServiceCard />
    </Box>
  );
};

export default ServicesContainer;
