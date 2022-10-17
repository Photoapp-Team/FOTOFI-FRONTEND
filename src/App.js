import "./App.css";
import { Route, Routes } from "react-router-dom";
import UserContextProvider from "./contexts/UserContext";
import Homepage from "./pages/HomePage";
import FullRegistrationPage from "./pages/FullRegistrationPage";
import BasicRegistrationPage from "./pages/BasicRegistrationPage";

const App = () => {
  return (
    <>
      <UserContextProvider>
        <div>
          <header>
            <p>Bienvenidos a Fotofi</p>
          </header>
          <>
            <Routes>
              <Route path="/" element={<Homepage />}></Route>
              <Route
                path="/FullRegistration"
                element={<FullRegistrationPage />}
              ></Route>
              <Route
                path="/BasicRegistration"
                element={<BasicRegistrationPage />}
              ></Route>
            </Routes>
          </>
        </div>
      </UserContextProvider>
    </>
  );
};

export default App;
