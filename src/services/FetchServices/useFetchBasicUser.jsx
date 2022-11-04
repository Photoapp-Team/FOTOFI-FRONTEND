import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchBasicUser(userId) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { REACT_APP_API_ENDPOINT } = process.env;

  const [currentUserId, setCurrentUserId] = useState("");

  const updateUser = (userId) => {
    console.log("dentroupdate:", userId);
    setCurrentUserId(userId);
  };

  useEffect(() => {
    if (userId) {
      (async function () {
        try {
          const token = localStorage.getItem("token");
          setLoading(true);
          const response = await axios.get(
            `${REACT_APP_API_ENDPOINT}/users/basicinfo/${currentUserId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setData(response.data.data.user);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [currentUserId]);

  return { data, error, loading, updateUser };
}
