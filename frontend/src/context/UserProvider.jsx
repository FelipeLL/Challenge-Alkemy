import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [online, setOnline] = useState(false);

  useEffect(() => {
    readToken();
  }, []);

  const readToken = async () => {
    const res = await axios({
      method: "get",
      url: "http://localhost:5000/users",
      withCredentials: true,
    });
    if (res.data.isToken) {
      setOnline(true);
    } else {
      setOnline(null);
    }
  };
  return (
    <UserContext.Provider
      value={{
        online,
        setOnline,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;