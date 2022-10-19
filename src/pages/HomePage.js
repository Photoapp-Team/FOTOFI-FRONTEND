import RecipeReviewCard from "../components/Cards/PhotographerCard/PhotographerCard";
import { useUser } from "../contexts/UserContext";

const Homepage = () => {
  const { user, token } = useUser();
  console.log("user", user);
  console.log("token", token);
  return (
    <>
      <RecipeReviewCard />
      {!user ? <p>Loading...</p> : <p>Bienvenido {user.userName} a Fotofi</p>}
    </>
  );
};
export default Homepage;
