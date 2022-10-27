import { useContext, useState, useEffect } from "react";
import "./PhotographersContainer.css";
import axios from "axios";
import PhotographerCard from "../../Cards/PhotographerCard/PhotographerCard";

const PhotographersContainer = () => {
  const [services, setServices] = useState({});
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const usersPlaceholder = ["", "", "", "", "", ""];
  const { REACT_APP_API_ENDPOINT } = process.env;
  const url = `${REACT_APP_API_ENDPOINT}/users?role=Photographer`;
  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        console.log("haciendo fetch");
        const response = await axios.get(url);
        if (response) {
          console.log(response);
        }
        setData(response.data.data.users);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  if (!data) {
    return (
      <div className="photographersDisplayLoading">
        {usersPlaceholder.map((index) => {
          return (
            <>
              <PhotographerCard withFooter={false} isLoaded={false} key={index} />
            </>
          );
        })}
      </div>
    );
  }
  return (
    <div className="photographersDisplay">
      {data.map((user, index) => {
        return (
          <>
            <PhotographerCard
              name={user.username}
              coverImg={user.coverPhoto}
              ranking="5"
              profilePic={user.profilePic}
              location={user.location.city}
              withFooter={false}
              key={user.username}
              isLoaded={true}
              photographerId={user._id}
            />
          </>
        );
      })}
    </div>
  );
};

export default PhotographersContainer;
