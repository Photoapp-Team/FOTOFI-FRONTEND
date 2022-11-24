import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Fotofilogo from "../../images/fotofi.png";
import MobileFotofiLogo from "../../assets/Logo/FOTOFI LOGO REDUCED.png";
import SearchBar from "../SearchBar/Search";
import { useUser } from "../../contexts/UserContext";
import "./Meganav.css";
import ProfileMenu from "../Inputs/ProfileMenu";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

function Meganav() {
  const { isUserLoggedIn, user } = useUser();
  const currentLocation = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const phone = useMediaQuery("(max-width: 564px)");

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className="navbar">
      <Toolbar disableGutters sx={{ justifyContent: "center" }}>
        <div className="headerContainer">
          <div className="leftCornerNav">
            {phone ? (
              <div sx={{ opacity: 0.5 }}>
                <a href="/MainPage">
                  <img src={MobileFotofiLogo} className="fotofiLogo" />
                </a>
              </div>
            ) : (
              <>
                <div sx={{ opacity: 0.5 }}>
                  <a href="/MainPage">
                    <img src={Fotofilogo} className="fotofiLogo" />
                  </a>
                </div>
                <div>
                  {currentLocation.pathname === "/MainPage" && (
                    <div className="searchFull">
                      <SearchBar />
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
          <div className="rightCornerNav">
            {isUserLoggedIn && user?.name ? (
              <ProfileMenu data={user} />
            ) : (
              <>
                <Button
                  variant="contained"
                  href="/login"
                  sx={{
                    background: "#42b7d0",
                    color: "black",
                    fontSize: ".75rem",
                    margin: ".5rem",
                  }}
                  children="Inicia Sesion"
                />

                <Button
                  variant="contained"
                  href="/Registration"
                  sx={{
                    background: "transparent",
                    color: "#42b7d0",
                    fontSize: ".75rem",
                    margin: ".5rem",
                  }}
                  children="Registrate"
                />
              </>
            )}
          </div>
        </div>
      </Toolbar>
      <div className="mobileSearch">
        {currentLocation.pathname === "/MainPage" && <SearchBar />}
      </div>
    </AppBar>
  );
}
export default Meganav;
