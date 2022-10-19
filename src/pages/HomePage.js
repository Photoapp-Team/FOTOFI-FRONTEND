import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Homepage = () => {
  const user = useContext(UserContext);
  return (
    <>
      {!user ? <p>Loading...</p> : <p>Bienvenido {user.userName} a Fotofi</p>}
    </>
  );
};
export default Homepage;
