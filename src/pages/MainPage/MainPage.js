import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import ServiceCard from "../../components/Cards/ServiceCard/ServiceCard";

const MainPage = () => {
  const user = useContext(UserContext);
  return (
    <>
      {!user ? <p>Loading...</p> : <p>Bienvenido {user.userName} a Fotofi</p>}
      <ServiceCard />
    </>
  );
};
export default MainPage;
