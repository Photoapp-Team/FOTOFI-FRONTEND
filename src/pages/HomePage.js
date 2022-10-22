import { useUser } from "../contexts/UserContext";

const Homepage = () => {
  const { user, token } = useUser();
  return (
    <>
      {!user ? <p>Loading...</p> : <p>Bienvenido {user.userName} a Fotofi</p>}
    </>
  );
};
export default Homepage;
