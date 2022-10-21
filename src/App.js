import ButtonAppBar from './components/NavBar/NavBar';
import "./App.css";
import { Route, Routes } from "react-router-dom";
import UserContextProvider from "./contexts/UserContext";
import Homepage from "./pages/HomePage";
import MainPage from "./pages/MainPage/MainPage";
import FullRegistrationPage from "./pages/FullRegistrationPage";
import BasicRegistrationPage from "./pages/BasicRegistration/BasicRegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { green, purple, yellow, grey, red, blue, cyan } from "@mui/material/colors";
import "@fontsource/raleway"; // Defaults to weight 400.
import ProfilePage from "./pages/Profile/ProfilePage";

const theme = createTheme({
  typography: {
    fontFamily: ["Ralewway", "Roboto", "Arial"].join(","),
  },
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
    tertiary: {
      main: grey[400],
    },
    accent: {
      main: yellow[500],
    },
    heart: {
      main: red[500],
    },
    blue: {
      main: blue[500],
    }
    tabs: {
      main: cyan[500],
    },
  },
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <UserContextProvider>
          <>
            <header className="App-header">
              <ButtonAppBar />
              <p>Bienvenidos a Fotofi</p>
            </header>
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
              <Route path="/Login" element={<LoginPage />}></Route>
              <Route path="/Main" element={<MainPage />}></Route>
              <Route path="/Profile/" element={<ProfilePage />}></Route>
            </Routes>
          </>
        </UserContextProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
