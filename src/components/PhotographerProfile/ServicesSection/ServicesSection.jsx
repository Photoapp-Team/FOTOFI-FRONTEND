import { Box } from "@mui/material";
import React, { useEffect } from "react";
import usePackage from "../../../hooks/usePackage";
import ServiceCard from "../../Cards/ServiceCard/ServiceCard";

const ServicesSection = ({ id }) => {
  const { data } = usePackage(id);
  return (
    <Box sx={{ display: "flex" }}>
      {data &&
        data.map((pack, index) => {
          return (
            <ServiceCard
              key={index}
              img={pack.displayPhotos}
              withFooter={false}
              service={pack.name}
              isLoaded={true}
            />
          );
        })}
    </Box>
  );
};

export default ServicesSection;
