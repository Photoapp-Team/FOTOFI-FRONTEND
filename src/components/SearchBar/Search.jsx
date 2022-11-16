import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Toolbar from "@mui/material/Toolbar";
import useFetchPhotographers from "../../services/FetchServices/useFetchPhotographers";
import { Form, Formik } from "formik";
import { useUser } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { ConstructionOutlined } from "@mui/icons-material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "4ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}));

const SearchBar = () => {
  const navigate = useNavigate();

  const { setSearchWord } = useUser();
  const { searchWord } = useUser();
  const handleOnChange = (event) => {
    setSearchWord(event.target.value.toLowerCase());
  };

  const handleClick = (event) => {
    console.log("target:", event.target);

    //console.log("hiciste click");
    //   navigate("/");
  };
  return (
    <Toolbar sx={{ display: { xs: "none", md: "flex" }, mr: 1, color: "black" }}>
      <Search onClick={handleClick}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>

        <StyledInputBase
          label="search"
          name="search"
          type="text"
          value={searchWord}
          placeholder="Filtra por nombre o ciudad "
          onChange={handleOnChange}
        />
      </Search>
    </Toolbar>
  );
};

export default SearchBar;
