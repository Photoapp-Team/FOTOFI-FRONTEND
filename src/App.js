import "./App.css";
import { Route, Routes } from "react-router-dom";
import UserContextProvider from "./contexts/UserContext";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, purple, yellow, grey, red, blue, cyan } from "@mui/material/colors";
import "@fontsource/raleway"; // Defaults to weight 400.
import SuscriptionPage from "./pages/PaymentSuscription/PaymentSuscription";
import PackageDetailPage from "./pages/PackageDetailPage/PackageDetailPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AddServicePage from "./pages/AddServicePage/AddServicePage";
import NewSessionPage from "./pages/NewSessionPage/NewSessionPage";
import SelectionPage from "./pages/SelectionPage";
import SessionPage from "./pages/SessionPage/SessionPage";
import RatePage from "./pages/RatePage/RatePage";
import EditProfile from "./pages/EditProfilePage/EditProfilePage";
import Navbar from "./components/Navbar";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import PaymentPage from "./pages/PaymentPage/PaymentPage";

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway", "Roboto", "Arial"].join(","),
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
    },
    cyan: {
      main: cyan[500],
    },
  },
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <UserContextProvider>
          <div>
            <>
              <Navbar />
              <Routes>
                <Route path="/Registration" element={<RegistrationPage />}></Route>
                <Route path="/Login" element={<LoginPage />}></Route>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/Profile" element={<ProfilePage />}></Route>
                <Route path="/Profile/:id" element={<ProfilePage />}></Route>
                <Route path="/PackageDetail/:id" element={<PackageDetailPage />}></Route>
                <Route path="/AddService" element={<AddServicePage />}></Route>
                <Route path="/NewSession/:id" element={<NewSessionPage />}></Route>
                <Route path="/Selection/:id" element={<SelectionPage />}></Route>
                <Route path="/Session/:id" element={<SessionPage />}></Route>
              </Routes>
            </>
          </div>
        </UserContextProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
