import "./PhotographersContainer.css";
import PhotographerCard from "../../Cards/PhotographerCard/PhotographerCard";
import useFetchPhotographers from "../../../services/useFetchPhotographers";

const PhotographersContainer = ({ photographersData }) => {
  const usersPlaceholder = ["", "", "", "", "", ""];

  if (!photographersData) {
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
      {photographersData.map((user, index) => {
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
