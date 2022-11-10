import { useContext, useState, useEffect } from "react";
import ServiceFilterCard from "../../components/Cards/ServiceFilterCard/ServiceFilterCard";
import "./ServiceFilter.css";
import axios from "axios";

import { Box } from "@mui/material";

const ServiceFilter = () => {
  const [services, setServices] = useState({});
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const servicePlaceholder = ["", "", "", "", "", ""];
  const { REACT_APP_API_ENDPOINT } = process.env;
  const url = `${REACT_APP_API_ENDPOINT}/services`;

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);

        const response = await axios.get(url);
        if (response) {
        }
        setData(response.data.data.services);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  if (!data) {
    return (
      <div className="serviceFilterLoading">
        {servicePlaceholder.map((_, index) => {
          return <ServiceFilterCard withFooter={false} isLoaded={false} key={index} />;
        })}
      </div>
    );
  }
  return (
    <Box className="serviceFilter">
      {data.map((service, index) => {
        return (
          <ServiceFilterCard
            withFooter={false}
            service={service.name}
            key={service.name}
            img={service.coverPhoto}
            isLoaded={true}
          />
        );
      })}
    </Box>
  );
};

export default ServiceFilter;
