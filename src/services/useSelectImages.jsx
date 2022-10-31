import { useEffect, useState } from "react";
import axios from "axios";

export default function useSelectImages({ selectedImagesArray }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { REACT_APP_API_ENDPOINT } = process.env;

  const convertToObject = (selectedImagesArray) => {
    const selectedImagesObject = selectedImagesArray.reduce((accum, image) => {
      const object = { original: image, thumbnail: photo };
      return [...accum, object];
    }, []);
  };

  useEffect(() => {
    (async function () {
      try {
        const token = localStorage.getItem("token");
        let userId = "";
        if (token) {
          const payload = token.split(".")[1];
          userId = JSON.parse(atob(payload)).id;
        }
        setLoading(true);
        const response = await axios.get(
          `${REACT_APP_API_ENDPOINT}/sessions/session/${sessionId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(response.data.data.session);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { data, error, loading };
}
