import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchBasicUser(userId) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { REACT_APP_API_ENDPOINT } = process.env;
  useEffect(() => {
    (async function () {
      try {
        const token = localStorage.getItem("token");
        setLoading(true);
        const response = await axios.get(`${REACT_APP_API_ENDPOINT}/users/basicinfo/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data.data.user);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { data, error, loading };
}
