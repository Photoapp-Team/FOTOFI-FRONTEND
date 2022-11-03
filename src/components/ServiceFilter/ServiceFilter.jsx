import { useContext, useState, useEffect } from "react";
import ServiceCard from "../../components/Cards/ServiceCard/ServiceCard";
import "./ServiceFilter.css";
import axios from "axios";

const ServiceFilter = ({ setFilters }) => {
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
        {servicePlaceholder.map((index) => {
          return (
            <>
              <ServiceCard withFooter={false} isLoaded={false} key={index} />
            </>
          );
        })}
      </div>
    );
  }
  return (
    <div className="serviceFilter">
      {data.map((service, index) => {
        return (
          <>
            <ServiceCard
              withFooter={false}
              service={service.name}
              key={service.name}
              img={service.coverPhoto}
              isLoaded={true}
              setFilters={setFilters}
            />
          </>
        );
      })}
    </div>
  );
};

export default ServiceFilter;
