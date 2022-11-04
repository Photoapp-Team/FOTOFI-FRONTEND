import { useContext, useState, useEffect } from "react";
import ServiceCard from "../../components/Cards/ServiceCard/ServiceCard";
import "./ServiceFilter.css";
import axios from "axios";
import { filter } from "jszip";
import { Container } from "@mui/system";

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
      <Container maxWidth="xl">
        <div className="serviceFilterLoading">
          {servicePlaceholder.map((_, index) => {
            return <ServiceCard withFooter={false} isLoaded={false} key={index} />;
          })}
        </div>
      </Container>
    );
  }
  return (
    <Container maxWidth="xl">
      <div className="serviceFilter">
        {data.map((service, index) => {
          return (
            <ServiceCard
              withFooter={false}
              service={service.name}
              key={service.name}
              img={service.coverPhoto}
              isLoaded={true}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default ServiceFilter;
