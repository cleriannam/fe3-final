import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const initialState = { theme: "", data: [] };

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialState.theme);

  const cambiarTema = (theme) => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const tema = useMemo(() => ({ cambiarTema }), [theme]);

  return (
    <ContextGlobal.Provider value={{ tema, setTheme }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useGlobalContext = () => useContext(ContextGlobal);