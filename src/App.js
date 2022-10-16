import "./App.css";
import { Route, Routes } from "react-router-dom";
import UserContextProvider from "./contexts/UserContext";
import Homepage from "./pages/HomePage";
import ServiceCard from "./assets/Cards/ServiceCard";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
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
            <ServiceCard />
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
