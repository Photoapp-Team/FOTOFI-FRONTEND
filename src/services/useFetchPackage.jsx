import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchPackage(packageId) {
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
        console.log("URL:", `${REACT_APP_API_ENDPOINT}/packages/${packageId}`);
        setLoading(true);
        const response = await axios.get(`${REACT_APP_API_ENDPOINT}/packages/${packageId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data.data.package);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [packageId]);

  return { data, error, loading };
}
