import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchUniqueSession(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sessionUser, setSessionUser] = useState({});
  const { REACT_APP_API_ENDPOINT } = process.env;

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setData(response?.data.data.session);
        if (response?.data.data.session) {
          const { userId } = response?.data.data.session;
          const userUrl = `${REACT_APP_API_ENDPOINT}/users/basicinfo/${userId}`;
          const sessionUser = await axios.get(userUrl);
          setSessionUser(sessionUser?.data.data.user);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, error, loading, sessionUser };
}
