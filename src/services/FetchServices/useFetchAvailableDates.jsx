import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchAvailableDates(photographerId) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { REACT_APP_API_ENDPOINT } = process.env;

  useEffect(() => {
    (async function () {
      try {
        let token = localStorage.getItem("token");

        if (!token) {
          token = "";
        }
        setLoading(true);
        const response = await axios.get(
          `${REACT_APP_API_ENDPOINT}/sessions/unavaiableDates/${photographerId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(response.data.data.unavailableDates);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return {
    data,
    error,
    loading,
  };
}
