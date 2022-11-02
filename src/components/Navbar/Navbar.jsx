import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Fotofilogo from "../../images/fotofi.png";
import SearchBar from "../SearchBar/Search";
import { useUser } from "../../contexts/UserContext";
import "./Navbar.css";
import useFetchBasicUser from "../../services/FetchServices/useFetchBasicUser";
import ProfileMenu from "../Inputs/ProfileMenu";

function Navbar() {
  const { isUserLoggedIn } = useUser();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const userId = localStorage.getItem("userId");

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const myUser = useFetchBasicUser(userId);
  console.log("MyUser:", myUser);

  return (
    <AppBar position="sticky" sx={{ background: "#f5f5f5" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div className="headerContainer">
            <div sx={{ opacity: 0.5 }}>
              <a href="/">
                <img src={Fotofilogo} className="fotofiLogo" />
              </a>
            </div>
            <div>
              <SearchBar />
            </div>
            <div className="rightCornerNav">
              {isUserLoggedIn && myUser?.data ? (
                <ProfileMenu data={myUser.data} />
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
                    children="Log in"
                  />

                  <Button
                    variant="contained"
                    href="/Basicregistration"
                    sx={{
                      background: "transparent",
                      color: "#42b7d0",
                      fontSize: ".75rem",
                      margin: ".5rem",
                    }}
                    children="Sing Up"
                  />
                </>
              )}
            </div>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
