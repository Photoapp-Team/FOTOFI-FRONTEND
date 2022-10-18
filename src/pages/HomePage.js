import { useContext } from "react";
import RecipeReviewCard from "../components/Cards/PhotographerCard/PhotographerCard";
import { UserContext } from "../contexts/UserContext";

const Homepage = () => {
  const user = useContext(UserContext);
  return (
    <>
      <RecipeReviewCard />
      {!user ? <p>Loading...</p> : <p>Bienvenido {user.userName} a Fotofi</p>}
    </>
  );
};
export default Homepage;
