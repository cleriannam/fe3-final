import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './routes/favs';
import Home from './Routes/Home';
import routes from './Routes/routes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.favs} element={<Favs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;