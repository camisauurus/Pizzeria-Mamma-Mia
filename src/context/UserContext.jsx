import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [token, setToken] = useState(true); 

  const logout = () => setToken(false);
  const login = () => setToken(true); 

  return (
    <UserContext.Provider value={{ token, logout, login }}>
      {children}
    </UserContext.Provider>
  );
}
