import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDentistsStates } from '../context/dentists';
import { useContext } from 'react';
import { ContextGlobal } from '../context/global';

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context
const Detail = () => {
  const { dentists } = useDentistsStates();
  const { id } = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const [dentistSelected, setDentistSelected] = useState({});
  const { tema } = useContext(ContextGlobal);

  fetch(url)
    .then(response => response.json())
    .then(data => setDentistSelected(data))
    .catch(error => console.log(error))

  return (
    <>
      <h1 style={{ color: tema === 'dark' ? 'white' : 'black' }}>Detail Dentist id {id}</h1>
      <table style={{ backgroundColor: tema === 'dark' ? 'black' : 'white', color: tema === 'dark' ? 'white' : 'black' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentistSelected.name}</td>
            <td>{dentistSelected.email}</td>
            <td>{dentistSelected.phone}</td>
            <td>{dentistSelected.website}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Detail