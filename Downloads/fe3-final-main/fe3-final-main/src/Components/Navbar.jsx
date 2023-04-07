import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../Routes/routes';
import { useGlobalContext } from '../utils';

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context
const Navbar = () => {
  const { tema, cambiartema } = useGlobalContext();

  return (
    <nav>
      {/* Aquí deberán agregar los links correspondientes a las rutas definidas */}
      {/* Deberán implementar además la lógica para cambiar de Theme con el botón */}
      <ul>
        <li><Link to={routes.home}>Home</Link></li>
        <li><Link to={routes.favs}>Favs</Link></li>
        <li><Link to={routes.contact}>Contact</Link></li>
        <li><Link to={routes.detail}>Detail</Link></li>
      </ul>
      <button onClick={cambiartema}>Change theme</button>
    </nav>
  );
};

export default Navbar;
