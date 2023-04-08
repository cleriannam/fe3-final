import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [tema, setTema] = useState('dark');

  const cambiarTema = () => {
    if (tema === 'dark') {
      setTema('light');
    } else {
      setTema('dark');
    }
  };

  const contextValue = {
    tema,
    cambiarTema,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;