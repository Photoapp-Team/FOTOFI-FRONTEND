import "./App.css";
import { Route, Routes } from "react-router-dom";
import UserContextProvider from "./contexts/UserContext";
import Homepage from "./pages/HomePage";
import ServiceCard from "./components/Cards/ServiceCard/ServiceCard";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { green, purple, yellow, grey } from "@mui/material/colors";
import PhotographerCard from "./components/Cards/PhotographerCard";
import "@fontsource/raleway"; // Defaults to weight 400.

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
  },
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </>
  );
};

export default App;
