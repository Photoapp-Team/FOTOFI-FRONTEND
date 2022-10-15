import "./App.css";
import { Route, Routes } from "react-router-dom";
import UserContextProvider from "./contexts/UserContext";
import Homepage from "./pages/HomePage";

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
            </Routes>
          </>
        </div>
      </UserContextProvider>
    </>
  );
};

export default App;
