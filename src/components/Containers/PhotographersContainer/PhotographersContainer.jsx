import "./PhotographersContainer.css";
import PhotographerCard from "../../Cards/PhotographerCard/PhotographerCard";
import useFetchPhotographers from "../../../services/FetchServices/useFetchPhotographers";
import { useEffect } from "react";
import { useUser } from "../../../contexts/UserContext";
import { Container } from "@mui/material";

const PhotographersContainer = () => {
  const usersPlaceholder = ["", "", "", "", "", ""];
  const { filters } = useUser();
  const { updatePhotoTags, data: photographersData, loading } = useFetchPhotographers();

  useEffect(() => {
    updatePhotoTags(filters);
  }, [filters]);

  if (!photographersData) {
    return (
      <Container maxWidth="xl">
        <div className="photographersDisplayLoading">
          {usersPlaceholder.map((_, index) => {
            return <PhotographerCard withFooter={false} isLoaded={false} key={index} />;
          })}
        </div>
      </Container>
    );
  }
  return (
    <Container maxWidth="xl">
      <div className="photographersDisplay">
        {photographersData.map((user, index) => {
          if (user.ratedSessions.length >= 1) {
            const ratesCount = user.ratedSessions.length;
            const ratesSum = user.ratedSessions.reduce((accum, rate) => {
              return accum + rate.rate;
            }, 0);
            const rateAverage = ratesSum / ratesCount;

            return (
              <PhotographerCard
                name={user.username}
                coverImg={user.coverPhoto}
                ranking={rateAverage}
                rankingCount={ratesCount}
                profilePic={user.profilePic}
                location={user.location.city}
                withFooter={false}
                key={user.username}
                isLoaded={true}
                photographerId={user._id}
              />
            );
          } else {
            return (
              <PhotographerCard
                name={user.username}
                coverImg={user.coverPhoto}
                ranking="-"
                rankingCount={0}
                profilePic={user.profilePic}
                location={user.location.city}
                withFooter={false}
                key={user.username}
                isLoaded={true}
                photographerId={user._id}
              />
            );
          }
        })}
      </div>
    </Container>
  );
};

export default PhotographersContainer;
