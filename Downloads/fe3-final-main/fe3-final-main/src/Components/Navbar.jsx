import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../Routes/routes';
import { useGlobalContext } from '../Components/utils/global.context';

const Navbar = () => {
  const { tema, setTheme } = useGlobalContext();

  const cambiarTema = () => {
    tema === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <nav>
      <ul>
        <li><Link to={routes.home}>Home</Link></li>
        <li><Link to={routes.favs}>Favs</Link></li>
        <li><Link to={routes.contact}>Contact</Link></li>
        <li><Link to={routes.detail}>Detail</Link></li>
      </ul>
      <button onClick={cambiarTema}>Change theme</button>
    </nav>
  );
};

export default Navbar;