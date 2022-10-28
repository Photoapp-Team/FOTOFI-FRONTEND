import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const usePackage = (id) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { REACT_APP_API_ENDPOINT } = process.env;
    const url = `${REACT_APP_API_ENDPOINT}/packages/photographerId/${id}`;

    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setData(response.data.data.package);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return { data, error, loading };
};

export default usePackage;
