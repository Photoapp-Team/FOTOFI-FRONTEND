import React, { useState, createContext, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [userId, setUserId] = useState("");
  const [token, setToken] = useState();
  const [isUserLoggedIn, setLogStatus] = useState(false);
  const [photographers, setPhotographers] = useState();
  const [mySessions, setMySessions] = useState();
  const [automaticRedirectionUrl, setAutomaticRedirection] = useState("");
  const navigate = useNavigate();
  const [filters, setFilters] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const MySwal = withReactContent(Swal);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      setUserId(localStorage.getItem("userId"));
    }
  }, []);

  useEffect(() => {
    if (token && userId) {
      automaticFetchMyUser();
    }
  }, [token, userId]);

  const redirecTo = (url) => {
    if (url === "") {
      navigate("/MainPage");
    } else {
      setAutomaticRedirection("");
      navigate(url);
    }
  };

  const automaticFetchMyUser = async () => {
    const { REACT_APP_API_ENDPOINT } = process.env;
    const AUTH_URL = `${REACT_APP_API_ENDPOINT}/users/${userId}`;

    const userResponse = await fetch(`${AUTH_URL}`, {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    });
    const userData = await userResponse.json();

    if (!userData) {
      setToken(localStorage.removeItem("token"));
      setUserId(localStorage.removeItem("userId"));
      setLogStatus(false);
    } else {
      setUser(userData.data.user);
      setLogStatus(true);
    }
  };

  const login = async (values) => {
    const { REACT_APP_API_ENDPOINT } = process.env;
    const AUTH_URL = `${REACT_APP_API_ENDPOINT}/auth`;
    const { password, email } = values;
    const loginData = {
      email,
      password,
    };

    const tokenResponse = await fetch(`${AUTH_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });
    const tokenData = await tokenResponse.json();

    if (tokenResponse.ok === false) {
      MySwal.fire({
        title: <strong>Hubo un error!</strong>,
        text: "los datos no son correctos",
        icon: `error`,
      });
    }
    if (tokenResponse.ok === true) {
      setLogStatus(true);
      setToken(tokenData.data.token);
      localStorage.setItem("token", tokenData.data.token);
      const temp = tokenData.data.token.split(".")[1];
      const userId = JSON.parse(atob(temp)).id;
      const USER_URL = `${REACT_APP_API_ENDPOINT}/users/${userId}`;

      const userResponse = await fetch(`${USER_URL}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenData.data.token}`,
        },
      });

      const userData = await userResponse.json();

      if (userData.success === true) {
        MySwal.fire({
          title: <strong>Sesi??n iniciada con exito!</strong>,
          icon: `success`,
        });
        setUser(userData.data);
        localStorage.setItem("userId", userData.data.user._id);
        setUserId(userData.data.user._id);
        setLogStatus(true);
        redirecTo(automaticRedirectionUrl);
      }
    }
  };

  const logout = () => {
    MySwal.fire({
      title: <strong>Sesi??n cerrada</strong>,
      icon: `info`,
    });

    setUser({});
    setLogStatus(false);
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        isUserLoggedIn,
        setAutomaticRedirection,
        userId,
        setLogStatus,
        filters,
        setFilters,
        searchWord,
        setSearchWord,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

export const useUser = () => useContext(UserContext);
