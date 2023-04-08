import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export const initialState = { theme: "", data: [], favs: [] };

export const GlobalContext = createContext(initialState);

export const ContextGlobal = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialState.theme);
  const [favs, setFavs] = useState(initialState.favs);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favs"));
    if (storedFavs) {
      setFavs(storedFavs);
    }
  }, []);
  
  const cambiarTema = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const memoizedValue = useMemo(() => ({ cambiarTema }), [theme]);

  return (
    <GlobalContext.Provider value={{ theme, favs, setFavs }}>
      <ContextGlobal.Provider value={memoizedValue}>
        {children}
      </ContextGlobal.Provider>
    </GlobalContext.Provider>
  );
};