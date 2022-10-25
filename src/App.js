import "./App.css";
import { Route, Routes } from "react-router-dom";
import UserContextProvider from "./contexts/UserContext";
import MainPage from "./pages/MainPage/MainPage";
import FullRegistrationPage from "./pages/FullRegistrationPage/FullRegistrationPage";
import BasicRegistrationPage from "./pages/BasicRegistration/BasicRegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { green, purple, yellow, grey } from "@mui/material/colors";
import "@fontsource/raleway"; // Defaults to weight 400.
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import PackageDetailPage from "./pages/PackageDetailPage/PackageDetailPage";

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
const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];
const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <UserContextProvider>
          <div>
            <>
              <Routes>
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
                <Route path="/Profile" element={<ProfilePage />}></Route>
                <Route path="/Profile/:id" element={<ProfilePage />}></Route>
                <Route
                  path="/PackageDetail/:id"
                  element={<PackageDetailPage />}
                ></Route>
              </Routes>
            </>
          </div>
        </UserContextProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
