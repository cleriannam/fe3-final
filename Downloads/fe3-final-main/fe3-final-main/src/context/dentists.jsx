import { createContext, useContext, useState } from 'react';
import React from 'react';
const DentistsContext = createContext([]);

export function DentistsProvider({ children }) {
  const [dentists, setDentists] = useState([
    { id: 1, name: 'Dentist 1', specialty: 'General Dentistry' },
    { id: 2, name: 'Dentist 2', specialty: 'Orthodontics' },
    { id: 3, name: 'Dentist 3', specialty: 'Pediatric Dentistry' },
  ]);

  return (
    <DentistsContext.Provider value={[dentists, setDentists]}>
      {children}
    </DentistsContext.Provider>
  );
}

export function useDentists() {
  const [dentists] = useContext(DentistsContext);
  return dentists;
}