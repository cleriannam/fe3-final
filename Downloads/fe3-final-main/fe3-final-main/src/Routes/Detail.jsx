import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDentists } from '../context/dentists';
import { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';

const Detail = () => {
  const { dentists } = useDentists();
  const { id } = useParams();
  const [dentistSelected, setDentistSelected] = useState({});
  const { tema } = useContext(ContextGlobal);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;

    fetch(url)
      .then(response => response.json())
      .then(data => setDentistSelected(data))
      .catch(error => console.log(error));
  }, [id]);

  const selectedDentist = dentists.find(dentist => dentist.id.toString() === id);
  
  return (
    <>
      <h1 style={{ color: tema === 'dark' ? 'white' : 'black' }}>Detail Dentist id {id}</h1>
      {selectedDentist ?
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
        :
        <p>Dentist not found</p>
      }
    </>
  );
};

export default Detail;