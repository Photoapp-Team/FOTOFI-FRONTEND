import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        const token = localStorage.getItem("token");
        let userId = "";
        let userUrl = "";
        if (token) {
          const payload = token.split(".")[1];
          userId = JSON.parse(atob(payload)).id;
          userUrl = `${url}/${userId}`;
        }
        setLoading(true);
        const response = await axios.get(userUrl, {
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
  }, [url]);

  return { data, error, loading };
}
