import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Contact from './routes/Contact';
import Detail from './routes/Detail';
import Favs from './routes/Favs';
import Home from './routes/Home';
import routes from './Routes/routes';
import  {useGlobalContext} from './Routes/routes';


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