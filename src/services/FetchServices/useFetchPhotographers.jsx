import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchPhotographers() {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { REACT_APP_API_ENDPOINT } = process.env;

  const [photographerFilters, setPhotographerFilters] = useState({ photoTags: [] });
  const [photographerSearch, setPhotographerSearch] = useState("");

  const updatePhotoTags = (photoTags) => {
    setPhotographerFilters({ ...photographerFilters, photoTags });
  };

  const updateSearchWord = (searchWord) => {
    console.log(searchWord);
    setPhotographerSearch(searchWord);
  };

  useEffect(() => {
    (async function () {
      try {
        let token = localStorage.getItem("token");

        if (!token) {
          token = "";
        }
        setLoading(true);
        const response = await axios.get(`${REACT_APP_API_ENDPOINT}/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            role: "Photographer",
            ...photographerFilters,
          },
        });
        setData(response.data.data.users);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [photographerFilters]);

  useEffect(() => {
    if (data) {
      if (photographerSearch !== "") {
        let searchResult = data.reduce((accum, photographer) => {
          if (
            photographer.username.toLowerCase().includes(photographerSearch) ||
            photographer.location.city.toLowerCase().includes(photographerSearch)
          ) {
            const object = { ...photographer };
            return [...accum, object];
          }
          return accum;
        }, []);
        setFilteredData(searchResult);
        console.log(data);
      } else {
        setFilteredData(data);
      }
    }
  }, [photographerSearch, data]);

  return {
    filteredData,
    error,
    loading,
    updatePhotoTags,
    updateSearchWord,
    photographerSearch,
  };
}
