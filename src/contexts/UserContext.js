import React, { useState, createContext, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [isUserLoggedIn, setLogStatus] = useState(false);
  const [automaticRedirectionUrl, setAutomaticRedirection] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("user", user);
    console.log("token", token);
  }, [user]);

  const redirecTo = (url) => {
    if (url === "") {
      navigate("/Main");
    } else {
      setAutomaticRedirection("");
      navigate(url);
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

    if (!tokenData) alert("Ingresaste mal tus datos");
    else {
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

      if (userData) {
        setUser(userData.data);
        setLogStatus(true);
        redirecTo(automaticRedirectionUrl);
      }
    }
  };

  const logout = () => {
    console.log("se está ejecutando logout");
    setUser({});
    setLogStatus(false);
  };

  const createSession = async (sessionData) => {
    const { comments, dateValue } = sessionData;
    console.log(comments, dateValue);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        createSession,
        isUserLoggedIn,
        setAutomaticRedirection,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

export const useUser = () => useContext(UserContext);
