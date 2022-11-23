import "./App.css";
import { Route, Routes } from "react-router-dom";
import UserContextProvider from "./contexts/UserContext";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, purple, yellow, grey, red, blue, cyan } from "@mui/material/colors";
import "@fontsource/raleway"; // Defaults to weight 400.
import PackageDetailPage from "./pages/PackageDetailPage/PackageDetailPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AddServicePage from "./pages/AddServicePage/AddServicePage";
import NewSessionPage from "./pages/NewSessionPage/NewSessionPage";
import SelectionPage from "./pages/SelectionPage";
import SessionPage from "./pages/SessionPage/SessionPage";
import RatePage from "./pages/RatePage/RatePage";
import EditProfile from "./pages/EditProfilePage/EditProfilePage";
import Meganav from "./components/Meganav";
import Footer from "./components/FooterLayout/FooterLayout";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import PaymentSuscription from "./pages/PaymentSuscription/PaymentSuscription";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import PayResponsePage from "./pages/PayResponsePage/PayResponsePage";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway", "Roboto", "Arial"].join(","),
  },
  palette: {
    primary: {
      main: "#60C1D7",
      "&:hover": {
        color: "#FFFFFF",
        opacity: 0.7,
      },
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
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          "&:hover": {
            color: "#FFFFFF",
            backgroundColor: "#60C1D7",
            opacity: 0.9,
          },
        }),
      },
      style: {
        backgroundColor: "red",
        fontSize: "24px",
        fontWeight: 800,
      },
      variants: [
        {
          props: {
            variant: "secondary",
          },
          style: {
            fontWeight: 500,
            fontSize: "12px",
            backgroundColor: "#60C1D7",
            color: "#000",
            cursor: "pointer",
          },
        },
        {
          props: {
            variant: "text",
          },
          style: {
            color: "blue",
            fontWeight: 500,
            fontSize: "12px",
            textTransform: "none",
          },
          styleOverrides: {
            root: ({ ownerState }) => ({
              "&:hover": {
                color: "blue",
                fontWeight: 500,
                fontSize: "12px",
                textTransform: "none",
              },
            }),
          },
        },
      ],
    },
    MuiMobileStepper: {
      style: {
        backgroundColor: "#60C1D7",
        fontSize: "24px",
        fontWeight: 800,
        dot: {
          backgroundColor: "#008000",
          height: "15px",
          width: "15px",
        },
        dotActive: {
          backgroundColor: "#3f51b5",
        },
      },
    },
  },
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <UserContextProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div>
              <>
                <Meganav />
                <Routes>
                  <Route path="/Registration" element={<RegistrationPage />}></Route>
                  <Route path="/Login" element={<LoginPage />}></Route>
                  <Route path="/" element={<LandingPage />}></Route>
                  <Route path="/MainPage" element={<MainPage />}></Route>
                  <Route path="/Profile" element={<ProfilePage />}></Route>
                  <Route path="/Profile/:id" element={<ProfilePage />}></Route>
                  <Route path="/Package/:id" element={<PackageDetailPage />}></Route>
                  <Route path="/AddService/:id" element={<AddServicePage />}></Route>
                  <Route path="/NewSession/:id" element={<NewSessionPage />}></Route>
                  <Route path="/Selection/:id" element={<SelectionPage />}></Route>
                  <Route path="/Session/:id" element={<SessionPage />}></Route>
                  <Route path="/Rate/:id" element={<RatePage />}></Route>
                  <Route path="/EditProfile/:id" element={<EditProfile />}></Route>
                  <Route path="/Landing" element={<LandingPage />}></Route>
                  <Route path="/Payment/:id" element={<PaymentPage />}></Route>
                  <Route path="/Suscription/:id" element={<PaymentSuscription />}></Route>
                  <Route path="/PayResponse/:id" element={<PayResponsePage />}></Route>
                </Routes>
                <Footer />
              </>
            </div>
          </LocalizationProvider>
        </UserContextProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
