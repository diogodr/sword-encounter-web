import { createContext, useContext, useEffect, useState } from "react";

const LoaderContext = createContext({});

export const LoaderProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);

  async function turnOn() {
    localStorage.setItem("@App:loader", JSON.stringify(true));
    console.log("TurnOn", loader);
  }

  async function turnOff() {
    localStorage.setItem("@App:loader", JSON.stringify(false));
    console.log("TurnOff", loader);
  }

  useEffect(() => {
    const storagedLoader = localStorage.getItem("@App:loader");

    if (storagedLoader) {
      setLoader(JSON.parse(storagedLoader));
    }
  }, []);

  return (
    <LoaderContext.Provider value={{ loader, turnOn, turnOff }}>
      {children}
    </LoaderContext.Provider>
  );
};

export function useLoader() {
  const context = useContext(LoaderContext);

  return context;
}

export default LoaderContext;
