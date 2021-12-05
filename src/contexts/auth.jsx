import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  async function Login(email, password) {
    const response = await api.post("/auth", {
      email: email,
      password: password,
    });

    console.log(response);
    setUser(response.data);
    localStorage.setItem("@App:user", JSON.stringify(response.data));
  }

  function Logout() {
    setUser(null);
    localStorage.removeItem("@App:user", JSON.stringify(user));
  }

  useEffect(() => {
    const storagedUser = localStorage.getItem("@App:user");
    // const storagedToken = localStorage.getItem('@App:token');

    if (storagedUser) {
      setUser(JSON.parse(storagedUser));
      // api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, Login, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export default AuthContext;
