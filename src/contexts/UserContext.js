import React, { useState, createContext, useEffect } from "react";
export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    const { REACT_APP_API_ENDPOINT } = process.env;
    const getUserTest = async () => {
      const response = await fetch(
        `${REACT_APP_API_ENDPOINT}/users/633895f0b250e66539a053b4`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzg5NWYwYjI1MGU2NjUzOWEwNTNiNCIsImlhdCI6MTY2NTgwNDQ2NCwiZXhwIjoxNjY1ODkwODY0fQ.NvUj8EFAE6F0yCFgSOOKqj3MnImeo0mW9gxqyzvyr6w",
          },
        }
      );
      const userData = await response.json();
      setUser(userData.data);
    };
    getUserTest();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
