import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../Routes/routes';
import { useTheme } from '../context/theme.context';

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const cambiarTema = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
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