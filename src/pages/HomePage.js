import RecipeReviewCard from "../components/Cards/PhotographerCard/PhotographerCard";
import ServiceCard from "../components/Cards/ServiceCard/ServiceCard";
import ActionAreaCard from "../components/Cards/ServiceCard/ServiceCard";
import { useUser } from "../contexts/UserContext";

const Homepage = () => {
  const { user, token } = useUser();
  console.log("user", user);
  console.log("token", token);
  return (
    <>
      <RecipeReviewCard />
      <ActionAreaCard />
      <ServiceCard />
      {!user ? <p>Loading...</p> : <p>Bienvenido {user.userName} a Fotofi</p>}
    </>
  );
};
export default Homepage;
